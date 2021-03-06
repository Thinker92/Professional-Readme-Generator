const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


const questions = () =>
  inquirer
    .prompt([
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
          "Provide what command should be used to install dependencies and any additional installation instructions:",
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

// Function to write README file
function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) {
      throw err;
    console.log("Writing README file was successful!")
    }
  })
}

// Function to initialize application
function init() {
  questions().then(function(userInput) {
    console.log(userInput)
    writeToFile("README1.md", generateMarkdown(userInput))
  });
}

// Function call to initialize app
init();
