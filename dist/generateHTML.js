import fs from "fs";

// generate HTML to publish
export default function generateHTML(TeamMembers) {
  TeamMembers.forEach((employee) => {
    5;
  });
  const newHTML = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>

  <body>
    <header>
      <title>
        <h1>My Team,/h1>
      </title>
    </header>
  </body>
  </html>`;

  fs.writeFile("index.html", newHTML);
}
