// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { type } = require("os");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Title of the Project:",
  },
  {
    type: "input",
    name: "description",
    message: "Description of the Project:",
  },
  {
    type: "input",
    name: "install",
    message: "Instructions for Project installation:",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage information for the Project:",
  },
  {
    type: "input",
    name: "testing",
    message: "Test instructions for the Project:",
  },
  {
    type: "input",
    name: "guidelines",
    message: "Contribution guidelines of the Project:",
  },
  {
    type: "list",
    name: "licensing",
    message: "License:",
    choices: ["MIT", "GPLv3", "Apache 2.0", "BSD 3-Clause", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "Github Username:",
  },
  {
    type: "input",
    name: "email",
    message: "Email:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) =>
    error ? console.error(error) : console.log("Success: README file generated")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
