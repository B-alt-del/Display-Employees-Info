const inquirer = require('inquirer');
const Engineers = require('./lib/engineer.js');
const Interns = require('./lib/intern');
const generate_HTML = require('./src/src.js');
const Managers = require('./lib/manager');
const fs = require('fs');
const team = [];

const start = () => {
    add_Manager();
}

const questions = (type) => {
    const questions = 
        [
            {
                type: "input",
                name: `${type}_name`,
                message: `${type}'s Name: `
            },
            {
                type: "input",
                name: `${type}_email`,
                message: `${type}'s Email:  `
            },
            {
                type: "input",
                name: `${type}_id`,
                message: `${type}'s ID:  `
            },
            {
                type: "input",
                name: `${type}`,
                message: `${type}'s Office number:  `,
                when: type === 'Manager'
            },
            {
                type: "input",
                name: `${type}`,
                message: `${type}'s Github username:  `,
                when: type === 'Engineer'
            },
            {
                type: "input",
                name: `${type}`,
                message: `${type}'s University:  `,
                when: type === 'Intern'
            },
        ]
    return questions;
}

const add_next = [
    {
        type: "list",
        message: "\n\nAdd another Employee from choices:",
        name: "next",
        choices: ["Manager", "Engineer", "Intern", "Continue w/o adding"]
    }
]

function add_another() {
    inquirer.prompt(add_next)
        .then((data => {
            switch (data.next) {
                case "Manager":
                    add_Manager();
                    break;
                case "Engineer":
                    add_Engineer();
                    break;
                case "Intern":
                    add_Intern();
                    break;

                default:
                    fs.writeFile('./dist/generated.html', generate_HTML(team), (error) => {
                        if (error){
                            console.log(error)
                        }//else{
                           // blah.readFile('test.txt', 'utf8', (error,data) => error ? console.error(error) : console.log(data)); //reading the file 
                       // }
                    });
                    // cardsEl.innerHTML = generate_HTML(team); //send team to src or pull in source 
            }
        }))
}

function add_Manager() {
    inquirer.prompt(questions('Manager')).then((data) => {
        const manager = new Managers(data.Manager_name, data.Manager_id, data.Manager_email, data.Manager)
        team.push(manager);
        add_another();
    })
}
function add_Engineer() {
    inquirer.prompt(questions('Engineer')).then((data) => {
        const engineer = new Engineers(data.Engineer_name, data.Engineer_id, data.Engineer_email, data.Engineer)
        team.push(engineer);
        add_another();
    })
}
function add_Intern() {
    inquirer.prompt(questions('Intern')).then((data) => {
        const intern = new Interns(data.Intern_name, data.Intern_id, data.Intern_email, data.Intern)
        team.push(intern);
        add_another();
    })
}

start();
