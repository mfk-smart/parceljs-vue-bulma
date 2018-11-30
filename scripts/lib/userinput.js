const inquirer = require('inquirer')

module.exports = {
  pageOrSubcomponent: () => {
    return inquirer
      .prompt([{
        name: 'compType',
        type: 'checkbox',
        message: 'What would you like to create?',
        choices: [{ name: 'Page' }, { name: 'Subcomponent' }],
      }, {
        name: 'compName',
        type: 'string',
        message: 'Please enter a name for this component:',
      }, {
        name: 'store',
        type: 'confirm',
        message: 'Do you want to add store?',
      }, {
        name: 'router',
        type: 'confirm',
        message: 'Do you want to add router?',
      }])
      .then(answers => {
        return answers
      })
  },
}
