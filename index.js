const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "author",
      message: "What is the author's name?",
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please give a brief description of your project:",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },

    {
      type: "input",
      name: "installation",
      message:
        "Provide what command should be used to install dependancies and any additonal installation instructions:",
    },
    {
      type: "input",
      name: "tests",
      message: "What command should be run to run tests?",
    },

    {
      type: "input",
      name: "usage",
      message: "Provide usage information and/or examples for use:",
    },
    {
      type: "input",
      name: "contribution",
      message:
        "Enter instructions for future developers to contribute to your project:",
    },
    {
      type: "input",
      name: "githubURL",
      message: "Provide a link to the GitHub Repository:",
    },
  ]);

// TODO: Create a function to write README file
const writeToFile = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
function init() {
  questions();
}

// Function call to initialize app
init();
