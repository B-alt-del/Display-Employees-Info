
const Employee = require('./lib/employee.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const fs = require('fs');

const brad = new Engineer('brad',69,'bradschill@gmail.com', 'b-alt-del')


console.log(brad)


// function init() {
//     inquirer.prompt(questions).then(generateMarkdown).then(writeToFile)
// }

// init()
