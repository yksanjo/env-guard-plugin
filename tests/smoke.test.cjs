const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

test('env-guard-plugin has CLI and vscode extension metadata', () => {
  assert.equal(fs.existsSync('src/index.js'), true);
  assert.equal(fs.existsSync('vscode-extension/package.json'), true);
});
