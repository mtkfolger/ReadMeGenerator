// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = (answers) => {
return `#${answers.Title}
---

##Description
>${answers.Description}

###Table of Contents 
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contribution Guidelines](#Contribution)
[Tests](#Tests)
[Questions](#Questions)

###Installation Instructions <a name="Installation"></a>
>${answers.Installation}

###Usage <a name="Usage"></a>
>${answers.Usage}

###License <a name="License"></a>
>This project is convered under the ${answers.License} License.


###Contribution Guidelines <a name="Contribution"></a>
>${answers.Contributing}

###Tests <a name="Tests"></a>
>${answers.Tests}

###Questions <a name="Questions"></a>
>Have questions? Feel free to reach out to me, by visiting me on GitHub at:
>
>${answers.Questions}
>
>or by contacting me via e-mail, at:
>
>${answers.Questions2}

---
*This readme template is © Michael Folger - 2021*
`;

}



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
                type: 'list',
                message: 'What license does this project have?',
                choices: ['Apache License 2.0 <br><br>![Apache Logo](https://badgen.net/badge/Licencse/Apache/green?icon=github)',
                 'GNU General Public License v3.0 <br><br>![GNU Logo](https://badgen.net/badge/Licencse/GNU/yellow?icon=github)',
                 'MIT License <br><br>![Apache Logo](https://badgen.net/badge/Licencse/MIT/red?icon=github)',
                 'Mozilla Public License 2.0 <br><br>![Apache Logo](https://badgen.net/badge/Licencse/Mozilla/orange?icon=github)']
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
                message: 'Please enter your GitHub account URL, so that users can view your GitHub account ...',
            },{
                name: 'Questions2',
                type: 'input',
                message: 'Please enter your e-mail, so that users can contact you with questions ...',
            },
        ])

        .then((answers) => {
            const readmeGen = questions(answers);

            console.log(readmeGen);

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
