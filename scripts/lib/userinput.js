const inquirer = require('inquirer')

module.exports = {
  pageOrSubcomponent: () => {
    return inquirer
      .prompt([
        {
          name: 'compType',
          type: 'checkbox',
          message: 'What would you like to create?',
          choices: [{ name: 'Page' }, { name: 'Subcomponent' }],
        },
        {
          name: 'compName',
          type: 'string',
          message: 'Please enter a name for this component:',
          validate: function(value) {
            if (/^[A-Z]([a-z]|[0-9]){2,20}$/.test(value)) {
              return true
            } else {
              return 'Please enter a name : \n\t- Starting with capital letter\n\t- Max. 20 characters in total (a-z,0-9)'
            }
          },
        },
        {
          name: 'store',
          type: 'confirm',
          message: 'Do you want to add store?',
          default: true,
        },
        {
          name: 'router',
          type: 'confirm',
          message: 'Do you want to add router?',
          when: function(answers) {
            if (answers.compType[0] === 'Page') {
              return true
            } else {
              return false
            }
          },
        },
      ])
      .then(answers => {
        return answers
      })
  },
}
