// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const markDown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe this project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use it?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who can contribute and what are the guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How would you direct someone to test this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license did you use?',
        choices: ['MIT', 'Apache', 'ISC'],
        filter(val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions, where can people reach you by email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'For questions, where can people find your github account? (in format of "github.com/username")'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        const answers = markDown(data)
        fs.writeFile('README.md', answers, (err) => {
            err ? console.error(err) : console.log('Success!');
        });
    })
    .catch((error) => {
        console.log(error)
    })
}

// Function call to initialize app
init();
