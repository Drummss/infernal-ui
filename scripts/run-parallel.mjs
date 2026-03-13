import { spawn } from 'node:child_process';

const commands = process.argv.slice(2);

if (commands.length === 0) {
  console.error('Usage: node scripts/run-parallel.mjs "<command>" ["<command>" ...]');
  process.exit(1);
}

const children = [];
let stopping = false;
let pendingCode = 0;

const killChild = (child) => {
  if (!child || child.exitCode !== null || child.signalCode !== null) {
    return;
  }

  if (process.platform === 'win32') {
    const killer = spawn('taskkill', ['/pid', String(child.pid), '/t', '/f'], {
      stdio: 'ignore',
      windowsHide: true,
    });

    killer.on('error', () => {
      child.kill();
    });

    return;
  }

  try {
    process.kill(-child.pid, 'SIGTERM');
  } catch {
    child.kill('SIGTERM');
  }
};

const maybeExit = () => {
  if (children.every((child) => child.exitCode !== null || child.signalCode !== null)) {
    process.exit(pendingCode);
  }
};

const stopAll = (code) => {
  if (!stopping) {
    stopping = true;
    pendingCode = code;

    for (const child of children) {
      killChild(child);
    }
  }

  maybeExit();
};

for (const command of commands) {
  const child = spawn(command, {
    detached: process.platform !== 'win32',
    shell: true,
    stdio: 'inherit',
  });

  children.push(child);

  child.on('error', () => {
    stopAll(1);
  });

  child.on('exit', (code, signal) => {
    const exitCode = code ?? (signal ? 1 : 0);
    stopAll(exitCode);
  });
}

process.on('SIGINT', () => {
  stopAll(130);
});

process.on('SIGTERM', () => {
  stopAll(143);
});
