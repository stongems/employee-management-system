const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const role = {
updateRole() {
    connection.query("SELECT * FROM role", (err, data) => {
        if(err) throw err;
        // console.log(data);
        const choices = data.map((role) => (role.title));
        console.log(choices);

        inquirer.prompt([
              {
                  type:"list",
                  name:"update",
                  message:"Which role would you like to update?",
                  choices: choices
              },
              {
                  type:"input",
                  name:"newRole",
                  message:"What would you like to rename this role?"
              },
          ])
          .then(function(data){
            console.log(data.newRole);
            connection.query(`UPDATE role SET ? WHERE ?`, 
                [
                    {title: `${data.newRole}`}, 
                    {title: `${data.update}`}
                ], 
                (err, res) => {
                    if (err) throw err;
                    console.log(res);
                readRoles();
            }); 
          });
    });
  }
}
  module.export = role;