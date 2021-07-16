const connection = require("../config/connection");
const inquirer = require("inquirer");

// connection() maybe
const department = {
  addDepartment() {
    inquirer
      .prompt({
        type: "input",
        name: "deptName",
        message: "What is the department name?",
      })
      .then(function (data) {
        connection.query("INSERT INTO department SET ?", {
          name: data.deptName,
        });
        console.log("Updating Department List........");
        readDepartment();
      });
  },
};

module.exports = department;
