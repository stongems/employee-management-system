const inquirer = require("inquirer");
const allController = require("./controllers/all");
const mysql = require("mysql")

let connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Be sure to update with your own MySQL password!
    password: "",
    database: "employeedb",
  });
 



function menu() {
    inquirer.prompt([{
        type: "list",
        message: "WHat do you want to do?",
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