const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");


// connection() maybe
const department = {
addDepartment() {
    inquirer.prompt({
        type:"input",
        name:"deptName",
        message:"What is the department name?"
    }).then(function(data) {
        connection.query(
            "INSERT INTO department SET ?",
            {
                name: data.deptName
            }
            );
        console.log("Updating department list-------");
        readDepartment();
    });
},

 addRole () {
    inquirer.prompt([
        {
        type:"input",
        name:"title",
        message:"What is the role title?"
        },
        {
        type:"input",
        name:"salary",
        message:"What is the role salary?"
        },
        {
        type:"input",
        name:"departmentID",
        message:"What is the department id for this role?"
        }
    ]).then(function(data) {
        connection.query(
            "INSERT INTO role SET ?",
            {
                title: data.title,
                salary: data.salary,
                department_id: data.departmentID
            }
            );
        console.log("Updating roles list-------");
        readRoles();
    });
  }
};
  module.export = department;