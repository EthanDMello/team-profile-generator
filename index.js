// main code

// import classes
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import Manager from "./lib/Manager.js";
// import other functions
import generateHTML from "./dist/generateHTML.js";

// import modules
import inquirer from "inquirer";

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
      const outputEngineer = new Engineer(
        response.engineersName,
        response.engineersId,
        response.engineersEmail,
        response.engineersOfficeNumber
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
      const outputIntern = new Intern(
        response.internsName,
        response.internsId,
        response.internsEmail,
        response.internsOfficeNumber
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
          const htmlOutput = generateHTML(teamMembers);
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
