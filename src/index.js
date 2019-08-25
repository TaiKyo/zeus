/**
 * regeneratorRuntime 用来解决rollup 使用async，await函数报错的 
 * https://github.com/rollup/rollup-plugin-babel/issues/306 
 */ 
import regeneratorRuntime from '@babel/runtime/regenerator';  
const program = require('commander');
const ora = require('ora');
const chalk = require('chalk');
const inquirer = require('inquirer');
import fileIsExist from './util/isExist';
import get from './util/get';
import {set,getAll, remove} from './util/rc';

program
  .command('init')
  .description('init project')
  .action(async () => { 
    const data = await getAll();
    inquirer.prompt([{
      type: 'list',
      name: 'templateName',
      message: 'choice the template:',
      choices: Object.keys(data),
    }, {
      type: String,
      name: 'projectName',
      message: 'please enter you project name:'
    }]).then(answer => {
      let {templateName, projectName} = answer;
      if (!fileIsExist(projectName)) {
        let loading = ora('downloading template...');
        loading.start();
        get(templateName,projectName)
          .then(() => {
            loading.succeed('download template success');
          })
      }else {
        console.log(chalk.red('the project is exists'));
      }
    })
  });
program
  .command('set')
  .description('set template')
  .action(() => {
    inquirer.prompt([{
      type: 'input',
      name: 'alias',
      message: 'what the template alias:'
    }, {
      type: 'input',
      name: 'owner',
      message: 'what the repository owner:'
    }, {
      type: 'input',
      name: 'name',
      message: 'what is name:'
    }, {
      type: 'list',
      name: 'repository',
      choices: ['github', 'gitlab', 'bitbucket'],
      default: 'gitlab'
    }]).then(answers => {
      let {alias} = answers;
      let loading = ora();
      loading.start();
      set(alias,answers).then(() => {
        loading.succeed('setting success');
      }, err => {
        console.log(err);
      });
    })
  });

program
  .command('remove <key>')
  .description('remove template config')
  .action(async (key) => {
    await remove(key);
  });

// program.usage('<command> [options]');
program.parse(process.argv);