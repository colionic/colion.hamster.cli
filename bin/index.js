#!/usr/bin/env node
const commander = require('commander');
const path = require('node:path');
const program = new commander.Command();
const pkg = require('../package.json');
const init = require('../lib/init');
global.__rootdir = path.join(__dirname, '../');

program
  .name(Object.keys(pkg.bin)[0])
  .usage('<command> [options]')
  .helpOption('-h, --help', '显示帮助信息')
  .version(pkg.version, '-v, --version', '显示当前版本号')
  .option('-d --debug', '启用调试模式');

init();

program.parse(process.argv);
