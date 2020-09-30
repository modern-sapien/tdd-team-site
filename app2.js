// ASYNC AWAIT TEST FILE

// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");
// const { title } = require("process");

// const teamMembers = [];

createTeam();

async function createTeam() {
try {               
    const response = await inquirer.prompt([
    {   name: "title",
        type: "list",
        message: "What is the team members position?",
        choices: ["manager", "engineer", "intern", "no new team members"]
    }
]) 
    if (response.title === "manager")   {
        const man = await Manager.createManager();
            teamMembers.push(man);
            console.log(teamMembers);
            createTeam();
    } 
    else if (response.title === "engineer")   {
        const eng = await Engineer.createEngineer();
        teamMembers.push(eng);
        console.log(teamMembers);
        createTeam();
    }
    else if (response.title === "intern")   {
        const int = await Intern.createIntern();
        teamMembers.push(int);
        console.log(teamMembers);
        createTeam();
    }
    else {
        const displayTeam = render(teamMembers);
        fs.writeFile(outputPath, displayTeam, function(err) {
            if (err) throw err
        })
        console.log("END THE CYCLE!")}
} 
catch(error) {
    if (error) throw new Error(error)
}

}


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

module.exports = teamMembers