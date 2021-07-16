const connection = require("../config/connection");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const all = {
  // callback as a parameter in order to redirect to main menu after selection.
  displayAll: (callBack = () => {}) => {
    let query = `SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, concat(m.first_name, ' ' ,  m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN role ON e.role_id = role.id INNER JOIN department ON role.department_id = department.id ORDER BY ID ASC;`;
    cd;
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.table(res);
      callBack(res);
    });
  },
};

module.exports = all;
