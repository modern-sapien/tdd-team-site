## Test Driven Development 
## Software Team Generator
## Process Document

Assignment:

A commandline application takes user responses to generate software team profiles; starting with a team manager & then subsequent team members. 

The user can input any number of team members; may be a mix of engineers & interns.

There are tests that have been written, and this assignment must pass all unit tests.

Upon completion of building a team through the commandline, the application will create an HTML file that displays a formatted team roster. 

Packages to use
Inquirer & Jest

The questions change based on the type of team member; interns provide school, engineers provide Github usernames


### Classes
Project must include these classes

Employee
    name
    id 
    email
    getName()
    getId()
    getEmail()
    getRole()   // Returns 'Employee'
Manager
    officeNumber
    getRole()   // Overridden to return 'Manager'

Engineer
    gitHub
    getGitHub()
    getRole()   // Overrrideen to return 'Engineer'

Intern
    school
    getSchool()
    getRole()   // Overriden to return 'Intern'

### User Input

Team must include one manager & any number of engineers & interns

### Roster Output

Generates a team.html file page in an output directory, that displays a formatted roster; must display
    Name
    Role
    ID
    Role specific property



## Steps

*   Transfer all necessary files & folders from resource folder
*   Look through test files to get an idea of formatting for .js files for exporting
*   Check dependencies; npm install Jest & Inquirer
*   run test jest & make sure all tests are failing prior to any coding
*   Start with looking over employee.test.js as this will be the class to build other classes will extend from & take notes
*   Look at other files for reference
*   Begin writing tests for employee.test.js & move on as all tests pass in this file to other files; Manager, Engineer, Intern.