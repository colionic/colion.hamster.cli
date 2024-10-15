const inquirer = require('inquirer');
const fs = require('fs');

const init = async () => {
  // 如果没有命令行参数
  if (!process.argv.slice(2).length) {
    console.clear();
    let { command } = await inquirer.prompt([
      {
        name: 'command',
        message: '有什么可以帮到您的吗?',
        type: 'list',
        choices: [{ name: '打开常用网站', value: 'openurl' }],
        default: 'openurl',
      },
    ]);
    require(`./${command}`)();
  }
};

module.exports = init;
