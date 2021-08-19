// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your github user name?',
        name: 'github',
    },

    {
        type: 'input',
        message: 'What is your email address?',
        name:'email',
    },

    {
        type: 'input',
        message: 'What is your projects name?',
        name: 'title',
    },

    {
        type: 'input',
        message: 'What is your projects Github deployment link?',
        name: 'deployed',
    },


    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project:'
    },

    {
        type:'list',
        name:'license',
        message: 'What kind of license does your project use?',
        choices: ["MIT","Fonzi","STP"],
    },

    {
        type:'input',
        name:'installation',
        message: "What commands should we run for dependencies?",
        default: 'npm i',
    },

    {
        type:'input',
        name:'test',
        message: "What commands should we run for tests?",
        default: 'npm run test',
    },

    {
        type:'input',
        name:'contributor',
        message: 'How does a user contribute to this project?',
    }
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {


}

// TODO: Create a function to initialize app
function init() {
    //present the user with questions
    inquirer.prompt(questions).then((data) => {
        console.log(data);

        // const fileContent =  JSON.stringify(data)
        // const contentMarkdown = generateMarkdown(fileContent)

        fs.writeFile('README.MD',generateMarkdown(data), (err) => {
            err ? console.log(err) : console.log('File was written!');
        });
        ///is this needed?

    });
}

// Function call to initialize app
init();
