const connection = require("../config/connection");
const inquirer = require("inquirer");

const role = {
  updateRole() {
    connection.query("SELECT * FROM role", (err, data) => {
      if (err) throw err;

      // Here we are taking the data that we got back from mysql
      // and we are restructuring it into a format that works better with inquirer
      /**
 before: 
  {
    id: 8,
    title: 'lawyer',
    salary: 190000,
    department_id: 4
  }
  after: { name: 'lawyer', value: 8 }
       */
      const choices = data.map((role) => ({
        name: role.title,
        value: role.id,
      }));

      inquirer
        .prompt([
          {
            type: "list",
            name: "update",
            message: "Which role would you like to update?",
            choices: choices,
          },
          {
            type: "input",
            name: "newRole",
            message: "What would you like to rename this role?",
          },
        ])
        .then(function (data) {
          console.log(data.newRole);
          const query = connection.query(
            // example: UPDATE role SET `title` = 'Best Sales Person' WHERE `id` = 1
            `UPDATE role SET ? WHERE ?`,
            [{ title: data.newRole }, { id: data.update }],
            (err, res) => {
              if (err) throw err;
              console.log(res);
              readRoles();
            }
          );
          console.log(query.sql); // for debugging purposes only, not needed
        });
    });
  },
  addRole() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "Title",
          message: "What is the Role Title?",
        },
        {
          type: "input",
          name: "salary",
          message: "What is the Role Salary?",
        },
        {
          type: "input",
          name: "departmentID",
          message: "What is the Department id for this Role?",
        },
      ])
      .then(function (data) {
        connection.query("INSERT INTO role SET ?", {
          title: data.title,
          salary: data.salary,
          department_id: data.departmentID,
        });
        console.log("Updating Roles List........");
        readRoles();
      });
  },
};

module.exports = role;
