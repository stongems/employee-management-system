const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");


const employee = {
addEmployee () {
    inquirer.prompt([
        {
        type:"input",
        name:"firstName",
        message:"What is the employee's first name?"
        },
        {
        type:"input",
        name:"lastName",
        message:"What is the employee's last name?"
        },
        {
        type:"input",
        name:"roleID",
        message:"What is the employee's role id?"
        },
        {
        type:"input",
        name:"managerID",
        message:"What is the employee's manager id?"
        }
    ]).then(function(data) {
        connection.query(
            "INSERT INTO employee SET ?",
            {
                first_name: data.firstName,
                last_name: data.lastName,
                role_id: data.roleID,
                manager_id: data.managerID || null 
            }
            );
        console.log("Updating employee list-------");
        readEmployees();
    });
  }
}
  module.export = employee;