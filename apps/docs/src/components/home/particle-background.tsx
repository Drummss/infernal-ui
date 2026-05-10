import { transparentizeColor } from '@infernal-ui/preset';
import { Box } from '@infernal-ui/solid';
import { Delaunay } from 'd3-delaunay';
import { onCleanup, onMount } from 'solid-js';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

type WorldBounds = {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  worldWidth: number;
  worldHeight: number;
};

const createParticle = (bounds: WorldBounds): Particle => {
  return {
    x: bounds.minX + Math.random() * bounds.worldWidth,
    y: bounds.minY + Math.random() * bounds.worldHeight,
    vx: (Math.random() - 0.5) * 20,
    vy: (Math.random() - 0.5) * 20,
    radius: 1.5,
  };
};

const getCellKey = (cellX: number, cellY: number) => {
  return `${cellX}:${cellY}`;
};

const buildSpacialGrid = (particles: Particle[], cellSize: number) => {
  const grid = new Map<string, number[]>();

  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];

    const cellX = Math.floor(particle.x / cellSize);
    const cellY = Math.floor(particle.y / cellSize);
    const key = getCellKey(cellX, cellY);

    let cell = grid.get(key);

    if (!cell) {
      cell = [];
      grid.set(key, cell);
    }

    cell.push(i);
  }

  return grid;
};

const readColorVar = (element: HTMLElement, name: string, fallback: string) =>
  getComputedStyle(element).getPropertyValue(name).trim() || fallback;

export type ParticleBackgroundProps = {
  mode: 'radius' | 'delaunay';
};

export const ParticleBackground = (props: ParticleBackgroundProps) => {
  let canvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let animationFrame = 0;
    let previousTime = performance.now();

    const boundsPadding = 200;

    const getWorldBounds = () => {
      const minX = -boundsPadding;
      const maxX = width + boundsPadding;
      const minY = -boundsPadding;
      const maxY = height + boundsPadding;

      return {
        minX,
        maxX,
        minY,
        maxY,
        worldWidth: maxX - minX,
        worldHeight: maxY - minY,
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = window.devicePixelRatio || 1;

      width = rect.width;
      height = rect.height;

      canvas.width = Math.round(rect.width * pixelRatio);
      canvas.height = Math.round(rect.height * pixelRatio);

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      ctx.clearRect(0, 0, rect.width, rect.height);

      const bounds = getWorldBounds();

      particles = Array.from(
        {
          length: Math.floor(
            (bounds.worldWidth / 72) * (bounds.worldHeight / 72),
          ),
        },
        () => createParticle(bounds),
      );
    };

    const wrapParticle = (particle: Particle) => {
      const { minX, maxX, minY, maxY, worldWidth, worldHeight } =
        getWorldBounds();

      if (particle.x < minX) {
        particle.x += worldWidth;
      }

      if (particle.x > maxX) {
        particle.x -= worldWidth;
      }

      if (particle.y < minY) {
        particle.y += worldHeight;
      }

      if (particle.y > maxY) {
        particle.y -= worldHeight;
      }
    };

    const update = (deltaSeconds: number) => {
      for (const particle of particles) {
        particle.x += particle.vx * deltaSeconds;
        particle.y += particle.vy * deltaSeconds;

        wrapParticle(particle);
      }
    };

    const distanceBetween = (a: Particle, b: Particle) => {
      const dx = a.x - b.x;
      const dy = a.y - b.y;

      return Math.sqrt(dx * dx + dy * dy);
    };

    const drawEdge = (
      from: Particle,
      to: Particle,
      lineColor: string,
      maxLineDistance: number,
    ) => {
      const distance = distanceBetween(from, to);

      if (distance > maxLineDistance) {
        return;
      }

      const opacity = 1 - distance / maxLineDistance;

      ctx.strokeStyle = transparentizeColor(lineColor, {
        amount: 100 * opacity * 0.35,
      }) as string;

      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();
    };

    const drawRadiusLines = (lineColor: string) => {
      const maxLineDistance = 150;
      const gridSize = maxLineDistance;
      const grid = buildSpacialGrid(particles, gridSize);

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        const cellX = Math.floor(particle.x / gridSize);
        const cellY = Math.floor(particle.y / gridSize);

        for (let offsetX = -1; offsetX <= 1; offsetX++) {
          for (let offsetY = -1; offsetY <= 1; offsetY++) {
            const neighborKey = getCellKey(cellX + offsetX, cellY + offsetY);
            const neighborIndexes = grid.get(neighborKey);

            if (!neighborIndexes) {
              continue;
            }

            for (const j of neighborIndexes) {
              if (i >= j) {
                continue;
              }

              drawEdge(particles[i], particles[j], lineColor, maxLineDistance);
            }
          }
        }
      }

      // for (let i = 0; i < particles.length; i++) {
      //   for (let j = i + 1; j < particles.length; j++) {
      //     const a = particles[i];
      //     const b = particles[j];

      //     drawEdge(a, b, lineColor, maxLineDistance);
      //   }
      // }
    };

    const createEdgeKey = (a: number, b: number) => {
      return a < b ? `${a}:${b}` : `${b}:${a}`;
    };

    const drawDelaunayLines = (lineColor: string) => {
      const maxLineDistance = 180;

      if (particles.length < 3) {
        return;
      }

      const delaunay = Delaunay.from(
        particles,
        (particle) => particle.x,
        (particle) => particle.y,
      );

      const triangles = delaunay.triangles;
      const seenEdges = new Set<string>();

      const drawTriangleEdge = (fromIndex: number, toIndex: number) => {
        const key = createEdgeKey(fromIndex, toIndex);

        if (seenEdges.has(key)) {
          return;
        }

        seenEdges.add(key);

        const from = particles[fromIndex];
        const to = particles[toIndex];

        drawEdge(from, to, lineColor, maxLineDistance);
      };

      for (let i = 0; i < triangles.length; i += 3) {
        const a = triangles[i];
        const b = triangles[i + 1];
        const c = triangles[i + 2];

        drawTriangleEdge(a, b);
        drawTriangleEdge(b, c);
        drawTriangleEdge(c, a);
      }
    };

    const drawDots = (dotColor: string) => {
      ctx.fillStyle = dotColor;

      for (const particle of particles) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const draw = () => {
      const dotColor = readColorVar(canvas, '--particle-dot', 'orange');
      const lineColor = readColorVar(canvas, '--particle-line', 'orange');

      ctx.clearRect(0, 0, width, height);

      if (props.mode === 'delaunay') {
        drawDelaunayLines(lineColor);
      } else {
        drawRadiusLines(lineColor);
      }

      drawDots(dotColor);
    };

    const frame = (time: number) => {
      const deltaSeconds = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;

      update(deltaSeconds);
      draw();

      animationFrame = requestAnimationFrame(frame);
    };

    resize();
    animationFrame = requestAnimationFrame(frame);

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    onCleanup(() => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    });
  });

  return (
    <Box
      as="canvas"
      ref={(canvasRef) => {
        canvas = canvasRef;
      }}
      position="absolute"
      w="100vw"
      h="100vh"
      top="0"
      left="0"
      inset="0"
      pointerEvents="none"
      style={{
        '--particle-dot': 'var(--colors-palette-primary-main)',
        '--particle-line': 'var(--colors-palette-primary-main)',
      }}
    />
  );
};
