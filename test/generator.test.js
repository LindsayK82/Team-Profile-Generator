const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (data) =>
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/stylesheet.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Employee Profile Generator</title>
</head>
<body>
    <header>
        <h1 id="h1">The Squad</h1>
    </header>
    <div class="container">
        <div class="card" id="card">
            <div class="row row-cols-8 row-cols-md-2 g-4">
                <div class="col">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">${data.title}</h5>
                      <p class="card-text">${data.id}</p>
                      <p>${data.email}</p>
                      <p>${data.phone}</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">${data.engineer}</h5>
                      <p class="card-text">${data.id}</p>
                      <p>${data.email}</p>
                      <p>${data.github}</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">${data.engineer}</h5>
                      <p class="card-text">${data.id}</p>
                      <p>${data.email}</p>
                      <p>${data.github}</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">${data.intern}</h5>
                      <p class="card-text">${data.id}</p>
                      <p>${data.email}</p>
                      <p>${data.school}</p>
                    </div>
                  </div>
                </div>
              </div>
              
          </div>
        </div>

         
    
</body>
</html>

`

inquirer
    .createPromptModule([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the manager?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email contact?',
        },
        {
            type: 'input',
            name: 'phone',
            message: 'What is the office number to be listed?',
        },

        {
            type: 'list',
            name: 'employee',
            message: 'Add the team below:',
            choices: ['Engineer', new inquirer.Separator(), 'Intern', new inquirer.Separator(), 'Exit'],
        },
        {
            type: 'input',
            name: 'engineer',
            message: 'What is the employee name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the GitHub link?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email contact?',
        },
        {
            type: 'list',
            name: 'add employee',
            message: 'Add the team below:',
            choices: ['Engineer', new inquirer.Separator(), 'Intern', new inquirer.Separator(), 'Exit']
        },
        {
            type: 'input',
            name: 'intern',
            message: 'What is the intern name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern ID?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the GitHub link?',
        },
    ])

    .then((data) => {
        const html = generateHTML(data);

        fs.writeFile('generatedIndex.html', html, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });