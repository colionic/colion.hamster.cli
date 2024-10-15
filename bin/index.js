#!/usr/bin/env node
const commander = require('commander');
const path = require('node:path');
const program = new commander.Command();
const pkg = require('../package.json');
const init = require('../lib/init');
global.__rootdir = path.join(__dirname, '../');

(async () => {
  const response = await fetch('https://registry.npmjs.org/@colion/hamster');
  const latest = await response.json();
  const latestVersion = latest['dist-tags'].latest;
  console.log(latestVersion);

  console.clear();
  if (pkg.version !== latestVersion) {
    console.log(
      `当前版本${pkg.version}，最新版本${latestVersion}，请更新 npm install @colion/hamster@${latestVersion}`,
    );
  }
  start();
})();

function start() {
  program
    .name(Object.keys(pkg.bin)[0])
    .usage('<command> [options]')
    .helpOption('-h, --help', '显示帮助信息')
    .version(pkg.version, '-v, --version', '显示当前版本号')
    .option('-d --debug', '启用调试模式');

  init();
  program.parse(process.argv);
}
