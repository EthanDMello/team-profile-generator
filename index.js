// main code

// import classes
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
// import other functions
const generateHTML = require("./dist/generateHTML.js");

// import modules
const inquirer = require("inquirer");

// initialise array to export
let teamMembers = [];

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
      const outputManager = new Manager(
        response.managersName,
        response.managersId,
        response.managersEmail,
        response.managersOfficeNumber
      );
      teamMembers.push(outputManager);
      mainMenu();
    });
};

const engineerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineers name?",
        name: "engineersName",
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
      const outputEngineer = new Engineer(
        response.engineersName,
        response.engineersId,
        response.engineersEmail,
        response.engineersGithubUsername
      );
      teamMembers.push(outputEngineer);
      mainMenu();
    });
};

const internPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the interns name?",
        name: "internsName",
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
        message: "What is the interns school?",
        name: "internsSchool",
      },
    ])
    .then((response) => {
      const outputIntern = new Intern(
        response.internsName,
        response.internsId,
        response.internsEmail,
        response.internsSchool
      );
      teamMembers.push(outputIntern);
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
          console.log(teamMembers);
          generateHTML(teamMembers);
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
