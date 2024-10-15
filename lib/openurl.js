const fs = require('fs');
const path = require('node:path');
const inquirer = require('inquirer');
const { spawn } = require('child_process');
const cwd = process.cwd();

module.exports = async () => {
  await checkConfigFile();
  // 读取 .hamsterrc urls
  let data = require(path.join(cwd, '/.hamsterrc.json'));
  if (!data) data = require(path.join(__rootdir, '/.hamsterrc.json'));
  if (!data) data = {};
  let urls = data?.urls || [];

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

const checkConfigFile = async () => {
  const configPath = path.join(cwd, '.hamsterrc.json');

  // 检查是否存在 .hamsterrc.json 文件
  if (!fs.existsSync(configPath)) {
    // 文件不存在，询问用户是否创建
    const { createFile } = await inquirer.prompt([
      {
        name: 'createFile',
        type: 'list',
        message: '未找到 .hamsterrc.json 文件，是否创建？',

        choices: [
          { name: '是', value: true },
          { name: '否', value: false },
        ],
      },
    ]);

    // 如果用户选择创建文件
    if (createFile) {
      // 创建一个默认的 .hamsterrc.json 文件
      const defaultConfig = {
        urls: [
          {
            name: 'npm',
            value: 'https://www.npmjs.com/',
          },
        ],
      };

      fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2), 'utf-8');
      console.log('.hamsterrc.json 文件已创建');
    } else {
      console.log('未创建 .hamsterrc.json 文件');
    }
  } else {
    console.log('.hamsterrc.json 文件已存在');
  }
};
