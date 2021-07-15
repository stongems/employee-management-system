const inquirer = require("inquirer");
const allController = require("./controllers/all");
const mysql = require("mysql")
const figlet = require('figlet');


let connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Be sure to update with your own MySQL password!
    password: "",
    database: "employeedb"
  });
 
// Displays start graphic and starts the init function
const start = () => {
    figlet('     E - M - S', {
        font: 'Big'
    }, (err, data) => {
        if (err) {
            console.log(err)
        }
        console.log("\n")
        console.log(data);
        console.log("       ****************************************")
        console.log("\n                    Welcome to the \n             Employee Management System!")
        console.log("\n       ****************************************")
        menu();
    })

}
start();

function menu() {
    inquirer.prompt([{
        type: "list",
        message: "What do you want to do?",
        name: "Menu",
        choices: [
           "Add Departments",
           "Add Roles",
           "Add Employees",
           "View Departments",
           "View Roles",
           "View Employees",
           "Update Employee Roles" 
        ]
    }])
    .then(function(response){
        if (response.Menu === "Add Departments"){
            addDepartment()
        }
        else if (response.Menu === "View Departments"){
            viewDepartments()
        }
    })
}
function viewDepartments(){
connection.query("select * from department", function(err, data){
    console.table(data)
    menu()
})
}

function addDepartment(){

}


menu()