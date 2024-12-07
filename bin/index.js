#!/usr/bin/env node

const { spawn, execSync } = require('child_process');
const path = require('path');

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: dot <file> [args]');
  process.exit(1);
}

const fileToRun = args[0];
const otherArgs = args.slice(1);

const resolvedFile = path.resolve(process.cwd(), fileToRun);

const globalModulePath = execSync('npm root -g', { encoding: 'utf-8' }).trim();

const dotScriptPath = path.join(globalModulePath, 'dot-script');

const nodeProcess = spawn(
  'node',
  ['-r', dotScriptPath, resolvedFile, ...otherArgs],
  { stdio: 'inherit' }
);

nodeProcess.on('close', (code) => {
  process.exit(code);
});
