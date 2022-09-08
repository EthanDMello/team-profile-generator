// main code

// import classes
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");

// control the manager prompt and what to build next.
const managerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the managers name?",
        name: "managersName",
      },
      {
        type: "input",
        message: "What is the managers employee ID?",
        name: "managersId",
      },
      {
        type: "input",
        message: "What is the managers email?",
        name: "managersEmail",
      },
      {
        type: "input",
        message: "What is the managers office number?",
        name: "managersOfficeNumber",
      },
    ])
    .then((response) => {
      mainMenu();
    });
};

const engineerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineers name?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is the engineers employee ID?",
        name: "engineersId",
      },
      {
        type: "input",
        message: "What is the engineers email?",
        name: "engineersEmail",
      },
      {
        type: "input",
        message: "What is the engineers Github username?",
        name: "engineersGithubUsername",
      },
    ])
    .then((response) => {
      mainMenu();
    });
};

const mainMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Who do you want to build next?",
        name: "option",
        choices: ["Engineer", "Intern", "Finish building team"],
      },
    ])
    .then(() => {
      switch (response.option) {
        case "Finish building team":
          console.log("finished!");
          return;
        case "Intern":
          internPrompt();
          break;
        case "Engineer":
          engineerPrompt();
          break;
      }
    });
};

const main = () => {
  managerPrompt();
};

main();
