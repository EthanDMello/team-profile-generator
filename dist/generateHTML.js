import fs from "fs";

// generate HTML to publish
export default function generateHTML(TeamMembers) {
  const newMemberAr = [];
  let spreadMemberVar = "";
  TeamMembers.forEach((employee, i) => {
    switch (employee.constructor.name) {
      case "Manager":
        const newMember = `
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Manager
            </p>
          </header>
          <div class="card-content">
            <div class="content">
            ${employee.name}
            </div>
          </div>
        </div>
        `;
        break;
      case "Engineer":
        break;
    }
    newMemberAr.push(newMember);
  });
  newMemberAr.forEach((employee) => {
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
    <main>${newMemberAr}</main>
  </body>
  </html>`;

  fs.writeFile("./dist/index.html", newHTML, (err) => {
    if (err) {
      console.error(err);
    }
  });
}
