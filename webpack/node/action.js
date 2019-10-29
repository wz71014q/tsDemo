const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'confirm',
      name: 'handsome',
      message: 'Are you handsome?',
      default: true
    }
  ])
  .then((answers) => {
    console.log('结果为:');
    console.log(answers);
  });
