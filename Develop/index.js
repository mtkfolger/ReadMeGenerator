// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = (answers) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.Title}</h1>
    <p class="lead">I am from ${answers.Description}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.Table}</li>
      <li class="list-group-item">LinkedIn: ${answers.Installation}</li>
    </ul>
  </div>
</div>
</body>
</html>`;


const promptUser = () => {
inquirer
    .prompt([
        {
            name: 'Title',
            type: 'input',
            message: 'What is the title of your project?',
        },
        {
            name: 'Description',
            type: 'input',
            message: 'Please describe the project ...',
        },
        {
            name: 'Table',
            type: 'input',
            message: 'What sections would you like included in the Table of Contents?',
        },
        {
            name: 'Installation',
            type: 'input',
            message: 'What installation instructions would you like included?',
        },
        {
            name: 'Usage',
            type: 'input',
            message: 'Please describe a use case for this application?',
        },
        {
            name: 'License',
            type: 'input',
            message: 'What license does this project have?',
        },
        {
            name: 'Contributing',
            type: 'input',
            message: 'Please describe how you would like others to be able to contribute to this project ...',
        }, {
            name: 'Test',
            type: 'input',
            message: 'What tests were done for this project?',
        }, {
            name: 'Questions',
            type: 'input',
            message: 'Please describe how users can get in contact with you if they have questions ...',
        },
    ])
    
    .then((answers) => {
        console.log("hello" + answers.Title);

        const readmeGen = questions(answers);

        // TODO: Create a function to write README file
        fs.writeToFile('README.md', readmeGen, (err) =>
            err ? console.log(err) : console.log('Successfully Created README.md')
        );
    })}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((answers) => writeFileAsync('README.md', readmeGen(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
