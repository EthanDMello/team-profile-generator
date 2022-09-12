// main code

// import classes

import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import Manager from "./lib/Manager.js";

import inquirer from "inquirer";

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

const internPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the interns name?",
        name: "InternsName",
      },
      {
        type: "input",
        message: "What is the interns employee ID?",
        name: "internsId",
      },
      {
        type: "input",
        message: "What is the interns email?",
        name: "internsEmail",
      },
      {
        type: "input",
        message: "What is the interns Github username?",
        name: "internsGithubUsername",
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
    .then((response) => {
      switch (response.option) {
        case "Finish building team":
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
