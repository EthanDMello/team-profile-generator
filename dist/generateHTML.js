const fs = require("fs");

// generate HTML to publish
function generateHTML(TeamMembers) {
  const newMemberAr = [];
  let spreadMemberVar = "";
  TeamMembers.forEach((employee, i) => {
    switch (employee.constructor.name) {
      case "Manager":
        let newManager = `
        <div class="box m-3 has-background-primary">
          <div class="content p-6 has-text-centered">
            <span class="is-flex">
              <h1>Manager</h1>
              <span class="is-align-self-center">
                <ion-icon name="bulb-outline" size="large"></ion-icon>
              </span>
            </span>
            <p>${employee.name}</p>
            <p>Employee id: ${employee.id}</p>
            <p><a href="mailto: ${employee.email}">${employee.email}</a></p>
            <p>Office Number: ${employee.officeNumber}</p>
          </div>
        </div>
        `;
        newMemberAr.push(newManager);
        break;
      case "Engineer":
        let newEngineer = `
        <div class="box m-3 has-background-success">
          <div class="content p-6 has-text-centered">
            <span class="is-flex">
              <h1>Engineer</h1>
              <span class="is-align-self-center">
                <ion-icon name="cog-outline" size="large"></ion-icon>
              </span>
            </span>
            <p>${employee.name}</p>
            <p>Employee id: ${employee.id}</p>
            <p><a href="mailto: ${employee.email}">${employee.email}</a></p>
            <p><a href="https://github.com/${employee.github}" target="_blank"clear>${employee.github}</a></p>
          </div>
        </div>
        `;
        newMemberAr.push(newEngineer);
        break;
      case "Intern":
        let newIntern = `
        <div class="box m-3 has-background-info">
          <div class="content p-6 has-text-centered">
            <span class="is-flex">
              <h1>Intern</h1>
              <span class="is-align-self-center">
                <ion-icon name="cafe-outline" size="large"></ion-icon>
              </span>
            </span>
            <p>${employee.name}</p>
            <p>Employee id: ${employee.id}</p>
            <p><a href="mailto: ${employee.email}">${employee.email}</a></p>
            <p>School: ${employee.school}</p>
          </div>
        </div>
        `;
        newMemberAr.push(newIntern);
    }
  });
  (function () {
    newMemberAr.forEach((employee, i) => {
      spreadMemberVar = spreadMemberVar + employee;
    });
  })();
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
    <container class="hero is-small has-background-light">
      <div class="hero-body">
        <h1 class="is-size-1 has-text-centered">My Team</h1>
      </div>
    </container>
    <div class="is-flex is-flex-direction-row is-justify-content-space-evenly">
    ${spreadMemberVar}
    </div>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  </body>
  </html>`;

  fs.writeFile("./dist/index.html", newHTML, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

module.exports = generateHTML;
