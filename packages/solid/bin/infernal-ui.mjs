#!/usr/bin/env node

import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const VITE_CONFIG_CANDIDATES = [
  'vite.config.ts',
  'vite.config.mts',
  'vite.config.js',
  'vite.config.mjs',
  'vite.config.cjs',
];

const POSTCSS_CONFIG_CANDIDATES = [
  'postcss.config.cjs',
  'postcss.config.js',
  'postcss.config.mjs',
  'postcss.config.ts',
];

const ENTRY_FILE_CANDIDATES = [
  'src/main.tsx',
  'src/main.ts',
  'src/index.tsx',
  'src/index.ts',
  'src/entry-client.tsx',
];

const PANDA_LAYER_LINE = '@layer reset, base, tokens, recipes, utilities;';

const usage = () => {
  console.log(`infernal

Usage:
  infernal init [--bundler auto|vite|other] [--dry-run] [--yes]

Examples:
  infernal init
  infernal init --dry-run
  infernal init --bundler vite`);
};

const parseArgs = (argv) => {
  const args = {
    command: argv[0],
    bundler: 'auto',
    dryRun: false,
    yes: false,
  };

  for (let i = 1; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === '--dry-run') {
      args.dryRun = true;
      continue;
    }

    if (arg === '--yes' || arg === '-y') {
      args.yes = true;
      continue;
    }

    if (arg.startsWith('--bundler=')) {
      args.bundler = arg.slice('--bundler='.length);
      continue;
    }

    if (arg === '--bundler') {
      const next = argv[i + 1];
      if (!next) {
        throw new Error('Missing value for --bundler');
      }
      args.bundler = next;
      i += 1;
      continue;
    }

    if (arg === '--help' || arg === '-h') {
      args.command = 'help';
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  if (!['auto', 'vite', 'other'].includes(args.bundler)) {
    throw new Error(
      `Invalid --bundler value "${args.bundler}". Use auto, vite, or other.`,
    );
  }

  return args;
};

const readText = async (filePath) => {
  try {
    return await readFile(filePath, 'utf8');
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error) {
      if (error.code === 'ENOENT') {
        return null;
      }
    }
    throw error;
  }
};

const hasImportFor = (sourceText, importPath) =>
  sourceText.includes(`from '${importPath}'`) ||
  sourceText.includes(`from "${importPath}"`);

const insertImport = (sourceText, importLine) => {
  const lines = sourceText.split('\n');
  let lastImportIndex = -1;

  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i].trimStart().startsWith('import ')) {
      lastImportIndex = i;
    }
  }

  if (lastImportIndex >= 0) {
    lines.splice(lastImportIndex + 1, 0, importLine);
    return lines.join('\n');
  }

  return `${importLine}\n${sourceText}`;
};

const patchViteConfig = (sourceText) => {
  let next = sourceText;
  let changed = false;
  const notes = [];

  if (!hasImportFor(next, '@infernal-ui/solid/vite')) {
    next = insertImport(
      next,
      "import { infernalVite } from '@infernal-ui/solid/vite';",
    );
    changed = true;
  }

  if (!next.includes('infernalVite(')) {
    const pluginsMatch = next.match(/plugins\s*:\s*\[([\s\S]*?)\]/m);

    if (pluginsMatch) {
      const fullMatch = pluginsMatch[0];
      const current = pluginsMatch[1].trim();
      const updated = current ? `${current}, infernalVite()` : 'infernalVite()';
      next = next.replace(
        fullMatch,
        fullMatch.replace(pluginsMatch[1], updated),
      );
      changed = true;
    } else if (next.includes('defineConfig({')) {
      next = next.replace(
        'defineConfig({',
        'defineConfig({\n  plugins: [infernalVite()],',
      );
      changed = true;
    } else {
      notes.push(
        'Could not safely patch Vite config plugins array. Add infernalVite() manually.',
      );
    }
  }

  return { next, changed, notes };
};

const ensurePandaConfig = async ({
  projectRoot,
  operations,
  warnings,
  dryRun,
}) => {
  const pandaConfigPath = path.join(projectRoot, 'panda.config.ts');
  const template = [
    "import { defineInfernalConfig } from '@infernal-ui/solid/preset';",
    '',
    'export default defineInfernalConfig({});',
    '',
  ].join('\n');

  const existing = await readText(pandaConfigPath);
  if (existing === null) {
    operations.push({
      type: 'create',
      filePath: pandaConfigPath,
      summary: 'create Panda config',
    });

    if (!dryRun) {
      await writeFile(pandaConfigPath, template, 'utf8');
    }
    return;
  }

  const hasInfernalPreset =
    existing.includes('@infernal-ui/solid/preset') &&
    existing.includes('defineInfernalConfig');

  if (!hasInfernalPreset) {
    warnings.push(
      'panda.config.ts exists and was not modified automatically. Ensure it uses defineInfernalConfig(...) from @infernal-ui/solid/preset.',
    );
  }
};

const ensureIndexCss = async ({ projectRoot, operations, dryRun }) => {
  const indexCssPath = path.join(projectRoot, 'src/index.css');
  const existing = await readText(indexCssPath);

  if (existing === null) {
    operations.push({
      type: 'create',
      filePath: indexCssPath,
      summary: 'create src/index.css with Panda layers',
    });

    if (!dryRun) {
      await mkdir(path.dirname(indexCssPath), { recursive: true });
      await writeFile(indexCssPath, `${PANDA_LAYER_LINE}\n`, 'utf8');
    }
    return;
  }

  if (!existing.includes(PANDA_LAYER_LINE)) {
    const normalized = existing.endsWith('\n') ? existing : `${existing}\n`;
    const next = `${normalized}${PANDA_LAYER_LINE}\n`;

    operations.push({
      type: 'update',
      filePath: indexCssPath,
      summary: 'append Panda layers to src/index.css',
    });

    if (!dryRun) {
      await writeFile(indexCssPath, next, 'utf8');
    }
  }
};

const ensureCssEntryImport = async ({
  projectRoot,
  operations,
  warnings,
  dryRun,
}) => {
  const candidate = ENTRY_FILE_CANDIDATES.map((value) =>
    path.join(projectRoot, value),
  ).find((value) => existsSync(value));

  if (!candidate) {
    warnings.push(
      'Could not find an entry file to patch (looked for src/main.tsx, src/main.ts, src/index.tsx, src/index.ts, src/entry-client.tsx). Import "./index.css" in your app entry manually.',
    );
    return;
  }

  const existing = await readText(candidate);
  if (existing === null) {
    return;
  }

  if (existing.includes('index.css')) {
    return;
  }

  const next = `import './index.css';\n${existing}`;

  operations.push({
    type: 'update',
    filePath: candidate,
    summary: 'import ./index.css in entry file',
  });

  if (!dryRun) {
    await writeFile(candidate, next, 'utf8');
  }
};

const ensurePostcssConfig = async ({
  projectRoot,
  operations,
  warnings,
  dryRun,
}) => {
  const existingPath = POSTCSS_CONFIG_CANDIDATES.map((value) =>
    path.join(projectRoot, value),
  ).find((value) => existsSync(value));

  const template = [
    'module.exports = {',
    "  plugins: [require('@pandacss/dev/postcss')()],",
    '};',
    '',
  ].join('\n');

  if (!existingPath) {
    const nextPath = path.join(projectRoot, 'postcss.config.cjs');
    operations.push({
      type: 'create',
      filePath: nextPath,
      summary: 'create postcss.config.cjs with Panda PostCSS plugin',
    });

    if (!dryRun) {
      await writeFile(nextPath, template, 'utf8');
    }
    return;
  }

  const existing = await readText(existingPath);
  if (existing === null) {
    return;
  }

  if (!existing.includes('@pandacss/dev/postcss')) {
    warnings.push(
      `${path.basename(existingPath)} exists and was not modified automatically. Add @pandacss/dev/postcss manually.`,
    );
  }
};

const ensurePackageJson = async ({
  projectRoot,
  operations,
  warnings,
  dryRun,
}) => {
  const packageJsonPath = path.join(projectRoot, 'package.json');
  const source = await readText(packageJsonPath);

  if (source === null) {
    throw new Error('No package.json found in current directory.');
  }

  const packageJson = JSON.parse(source);
  packageJson.scripts ??= {};

  if (!packageJson.scripts.prepare) {
    packageJson.scripts.prepare = 'panda codegen';
    operations.push({
      type: 'update',
      filePath: packageJsonPath,
      summary: 'add scripts.prepare = "panda codegen"',
    });
  } else if (!String(packageJson.scripts.prepare).includes('panda codegen')) {
    packageJson.scripts.prepare = `${packageJson.scripts.prepare} && panda codegen`;
    operations.push({
      type: 'update',
      filePath: packageJsonPath,
      summary: 'append panda codegen to scripts.prepare',
    });
  }

  const hasPanda =
    packageJson.devDependencies?.['@pandacss/dev'] ||
    packageJson.dependencies?.['@pandacss/dev'];

  if (!hasPanda) {
    warnings.push(
      'Missing @pandacss/dev. Install with `pnpm add -D @pandacss/dev`.',
    );
  }

  if (operations.some((operation) => operation.filePath === packageJsonPath)) {
    const serialized = `${JSON.stringify(packageJson, null, 2)}\n`;
    if (!dryRun) {
      await writeFile(packageJsonPath, serialized, 'utf8');
    }
  }

  return packageJson;
};

const detectBundler = ({ requestedBundler, projectRoot, packageJson }) => {
  if (requestedBundler !== 'auto') {
    return requestedBundler;
  }

  const viteConfigPath = VITE_CONFIG_CANDIDATES.map((value) =>
    path.join(projectRoot, value),
  ).find((value) => existsSync(value));

  if (viteConfigPath) {
    return 'vite';
  }

  const hasViteDependency =
    packageJson.dependencies?.vite ||
    packageJson.devDependencies?.vite ||
    packageJson.peerDependencies?.vite;

  if (hasViteDependency) {
    return 'vite';
  }

  const scriptValues = Object.values(packageJson.scripts ?? {});
  if (scriptValues.some((value) => String(value).includes('vite'))) {
    return 'vite';
  }

  return 'other';
};

const configureVite = async ({ projectRoot, operations, warnings, dryRun }) => {
  const viteConfigPath = VITE_CONFIG_CANDIDATES.map((value) =>
    path.join(projectRoot, value),
  ).find((value) => existsSync(value));

  if (!viteConfigPath) {
    warnings.push(
      'Detected Vite, but no vite.config.* file was found. Create one and add infernalVite() manually.',
    );
    return false;
  }

  if (viteConfigPath.endsWith('.cjs')) {
    warnings.push(
      'vite.config.cjs detected. infernalVite() auto-patch currently supports ESM config files. Falling back to PostCSS config setup.',
    );
    return false;
  }

  const source = await readText(viteConfigPath);
  if (source === null) {
    return false;
  }

  const { next, changed, notes } = patchViteConfig(source);
  warnings.push(...notes);

  if (!changed) {
    return true;
  }

  operations.push({
    type: 'update',
    filePath: viteConfigPath,
    summary: 'add infernalVite() to Vite config',
  });

  if (!dryRun) {
    await writeFile(viteConfigPath, next, 'utf8');
  }

  return true;
};

const printSummary = ({ bundler, operations, warnings, dryRun, yes }) => {
  console.log(`[infernal] init complete (bundler: ${bundler})`);

  if (operations.length === 0) {
    console.log('[infernal] no file changes were needed.');
  } else {
    for (const operation of operations) {
      const relativeFilePath = path.relative(process.cwd(), operation.filePath);
      console.log(
        `[infernal] ${operation.type.toUpperCase()} ${relativeFilePath} (${operation.summary})`,
      );
    }
  }

  if (warnings.length > 0) {
    console.log('[infernal] notes:');
    for (const warning of warnings) {
      console.log(`  - ${warning}`);
    }
  }

  if (dryRun) {
    console.log('[infernal] dry run mode: no files were written.');
  }

  if (yes) {
    console.log('[infernal] --yes was accepted (non-interactive mode).');
  }
};

const main = async () => {
  const args = parseArgs(process.argv.slice(2));

  if (
    !args.command ||
    args.command === 'help' ||
    args.command === '--help' ||
    args.command === '-h'
  ) {
    usage();
    return;
  }

  if (args.command !== 'init') {
    throw new Error(`Unknown command: ${args.command}`);
  }

  const projectRoot = process.cwd();
  const operations = [];
  const warnings = [];

  const packageJson = await ensurePackageJson({
    projectRoot,
    operations,
    warnings,
    dryRun: args.dryRun,
  });

  const bundler = detectBundler({
    requestedBundler: args.bundler,
    projectRoot,
    packageJson,
  });

  await ensurePandaConfig({
    projectRoot,
    operations,
    warnings,
    dryRun: args.dryRun,
  });

  if (bundler === 'vite') {
    const patched = await configureVite({
      projectRoot,
      operations,
      warnings,
      dryRun: args.dryRun,
    });

    if (!patched) {
      await ensurePostcssConfig({
        projectRoot,
        operations,
        warnings,
        dryRun: args.dryRun,
      });
    }
  } else {
    await ensurePostcssConfig({
      projectRoot,
      operations,
      warnings,
      dryRun: args.dryRun,
    });
  }

  await ensureIndexCss({
    projectRoot,
    operations,
    dryRun: args.dryRun,
  });

  await ensureCssEntryImport({
    projectRoot,
    operations,
    warnings,
    dryRun: args.dryRun,
  });

  printSummary({
    bundler,
    operations,
    warnings,
    dryRun: args.dryRun,
    yes: args.yes,
  });
};

main().catch((error) => {
  console.error(`[infernal] ${error.message}`);
  process.exitCode = 1;
});
