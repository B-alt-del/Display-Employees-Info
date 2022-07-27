const Employee = require('./employee.js')


class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
    }
    getGithub(){

    }
    getRole(){
        //overidden to return engineer
    }


}


module.exports = Engineer