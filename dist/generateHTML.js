import fs from "fs";

// generate HTML to publish
export default function generateHTML(TeamMembers) {
  const newMemberAr = [];
  let spreadMemberVar = "";
  TeamMembers.forEach((employee, i) => {
    switch (employee.constructor.name) {
      case "Manager":
        let newManager = `
        <div class="box m-3">
          <div class="content p-6 has-text-centered">
            <h1>Manager</h1>
            <p>${employee.name}</p>
            <p>Employee id: ${employee.id}</p>
            <p>${employee.email}</p>
            <p>Office Number: ${employee.officeNumber}</p>
          </div>
        </div>
        `;
        newMemberAr.push(newManager);
        break;
      case "Engineer":
        let newEngineer = `
        <div class="box m-3">
          <div class="content p-6 has-text-centered">
            <h1>Manager</h1>
            <p>${employee.name}</p>
            <p>Employee id: ${employee.id}</p>
            <p>${employee.email}</p>
            <p>Github: ${employee.github}</p>
          </div>
        </div>
        `;
        newMemberAr.push(newEngineer);
        break;
      case "Intern":
        let newIntern = `
        <div class="box m-3">
          <div class="content p-6 has-text-centered">
            <h1>Manager</h1>
            <p>${employee.name}</p>
            <p>Employee id: ${employee.id}</p>
            <p>${employee.email}</p>
            <p>School: ${employee.school}</p>
          </div>
        </div>
        `;
        newMemberAr.push(newIntern);
    }
  });
  newMemberAr.forEach((employee, i) => {
    spreadMemberVar = spreadMemberVar + employee;
  });
  const newHTML = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teams Profile</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
    />
    <link rel="stylesheet" href="./style.css" />
  </head>

  <body>
    <header>
    <h1>My Team</h1>
    </header>
    <div class="is-flex is-flex-direction-row is-justify-content-space-evenly">
    ${spreadMemberVar}
    </div>
  </body>
  </html>`;

  fs.writeFile("./dist/index.html", newHTML, (err) => {
    if (err) {
      console.error(err);
    }
  });
}
