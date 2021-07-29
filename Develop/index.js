// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = (answers) =>
`#${answers.Title}
---
##Description
${answers.Description}

###Table of Contents 
[Installation Instructions](#Installation)
[Usage](#Usage)
[License](#License)
[Contribution Guidelines](#Contribution)
[Tests](#Tests)
[Questions](#Questions)

###Installation Instructions <a name="Installation"></a>
${answers.Installation}

###Usage <a name="Usage"></a>
${answers.Usage}

###License <a name="License"></a>
${answers.License}


###Contribution Guidelines <a name="Contribution"></a>
${answers.Contributing}

###Tests <a name="Tests"></a>
${answers.Tests}

###Questions <a name="Questions"></a>
${answers.Questions}

---
*This readme template is © Michael Folger - 2021*
`;




const promptUser = () => {
    return inquirer
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
                type: 'checkbox',
                message: 'What sections would you like included in the Table of Contents?',
                choices: [
                    {name: 'Installation', short: 'Installation', value:1, checked: true},
                    {name: 'Usage', short: 'Usage', value:2, checked: true},
                    {name: 'License', short: 'License', value:3, checked: true},
                    {name: 'Contirbution Guidelines', short: 'Contribution Guidelines', value:4, checked: true},
                    {name: 'Tests', short: 'Tests', value:5, checked: true},
                    {name: 'Questions', short: 'Questions', value:6, checked: true},                    
                ]
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
            const readmeGen = questions(answers);

            // TODO: Create a function to write README file
            fs.writeFile('README.md', readmeGen, (err) =>
                err ? console.log(err) : console.log('Successfully Created README.md')
            );
        })
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((answers) => fs.writeFile('README.md', readmeGen(answers)))
        .then(() => console.log('Successfully created README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
