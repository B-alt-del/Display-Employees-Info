const Employee = require('./employee.js')


// const questions = [
//     {
//         type: 'input',
//         name: 'manager_name',
//         message: 'Team Manager: '
//     },
//     {
//         name: 'manager_id',
//         message: "Manager's ID:  ",
//     },
//     {
//         name:'manager_email',
//         message: "Manager's email:  "
//     },
//     {
//         name: 'manager_office',
//         message: "Manager's office number:  "
//     }
// ]


// function generateManager(){
//     inquirer.prompt(questions).then(generateMarkdown).then(writeToFile)

// }

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        //overidden to return Manager
    }


}


module.exports = Manager