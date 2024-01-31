const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
inquirer
.prompt([
    // pass questions here
  {
    type: 'input',
    name: 'title',
    message: 'Project Name?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe project?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Install instructions?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage directions?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose the project licence:',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:'
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter Email address:'
  }

])
.then((answers) => {
    // user feedback to generate readme
    // .then takes (answers) as arguments to use an reference in markdown gen 
    const readmeContent = generateMarkdown(answers);

    // function to write README file
    // fs.writeFile( file, data, options, callback )
    fs.writeFile('README.md', readmeContent, 'utf8', (err) => {
      if (err) {
        console.error('Error', err);
      } else {
        console.log('README.md generated');
      }
    });
  })
  .catch((err) => {
    console.error('Error:', err);
  });

// function to initialize program
function init() {

}

// function call to initialize program
init();
