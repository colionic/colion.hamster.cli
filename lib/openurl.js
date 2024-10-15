const fs = require('fs');
const path = require('node:path');
const inquirer = require('inquirer');
const { spawn } = require('child_process');
module.exports = async () => {
  // 读取 .hamsterrc urls
  const cwd = process.cwd();
  let data = require(path.join(cwd, '/.hamsterrc.json'));
  if (!data) data = require(path.join(__rootdir, '/.hamsterrc.json'));
  if (!data) data = {};
  urls = data?.urls || [];

  let { url } = await inquirer.prompt({
    name: 'url',
    type: 'list',
    message: '请选择你要打开的网站',
    choices: urls,
  });

  const openChrome = spawn('open', ['-a', 'Google Chrome', url]);
  openChrome.on('close', (code) => {
    console.log(`网站已打开`);
    // 打开后再次返回主菜单
  });
};
