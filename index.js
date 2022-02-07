// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = () =>
  inquirer.prompt([
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
      type: "input",
      name: "installation",
      message: "Provide any installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide usage information aand/or examples for use:",
    },
    {
      type: "input",
      name: "contribution",
      message:
        "Enter instructions for future developers to contribute to your project:",
    },
    {
      type: "input",
      name: "testInstructions",
      message: "Provide example on how to run test:",
    },
  ]);

// TODO: Create a function to write README file
function writeToFile = util.promisify(fs.writeFile)

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
