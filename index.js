const inquirer = require("inquirer");
const mysql = require("mysql");
const figlet = require("figlet");

require("console.table");

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

// Displays start graphic and starts the init function
const start = () => {
    figlet(
        " E - M - S ",
        {
            font: "Big",
        },
        (err, data) => {
            if (err) {
        console.log(err);
    }
    console.log("\n");
    console.log(data);
    console.log("       ****************************************");
    console.log(
        "\n                    Welcome to the \n             Employee Management System"
        );
      console.log("\n       ****************************************");
      menu();
    }
    );
};
const all = {
  // callback as a parameter in order to redirect to main menu after selection.
  displayAll: (callBack = () => {}) => {
    let query = `SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, concat(m.first_name, ' ' ,  m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN role ON e.role_id = role.id INNER JOIN department ON role.department_id = department.id ORDER BY ID ASC;`;
    cd;
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.table(res);
      callBack();
    });
    connection.end();
  },
};
start();

function menu() {
    inquirer
    .prompt([
      {
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
          "Update Employee Roles",
        ],
      },
    ])
    .then(function (response) {
      if (response.Menu === "Add Departments") {
        department.addDepartment();
      } else if (response.Menu === "Add Roles") {
        role.addRoles();
      } else if (response.Menu === "Add Employees") {
        employee.addEmployees();
      } else if (response.Menu === "View Departments") {
        department.viewDepartments();
      } else if (response.Menu === "View Roles") {
        role.viewRoles();
      } else if (response.Menu === "View Employees") {
        employee.viewEmployees();
      } else if (response.Menu === "Update Employee Roles") {
        employee.updateEmployeeRoles();
      } else if (response.Menu === "Delete Employee") {
        all.deleteEmployee();
      } else {
        console.log("Good-bye");
        process.exit(0);
      }
    });
}

// connection() maybe
const department = {
  viewDepartments() {
    connection.query("SELECT * FROM department", (err, data) => {
      console.table(data);
      menu();
    });
  },
  addDepartment() {
    inquirer
      .prompt({
        type: "input",
        name: "deptName",
        message: "What is the department name?",
      })
      .then(function (data) {
        connection.query("INSERT INTO department SET ?", {
          name: data.deptName
        });
        console.log("Updating Department List........");
        menu();
      });
  },
};

const employee = {
  updateEmployeeRoles() {
    connection.query("SELECT * FROM role", (err, data) => {
      if (err) throw err;
      const empRoles = data.map((role) => {
        return {
          name: role.title,
          value: role.id
        };
      });

      connection.query("SELECT * FROM employee", function (err, data) {
        const employees = data.map((employee) => {
          return {
            name: employee.first_name + " " + employee.last_name,
            value: employee.id
          };
        });

        inquirer
          .prompt([
            {
              type: "list",
              name: "update",
              message: "Which role would you like to update?",
              choices: empRoles
            },
            {
              type: "list",
              name: "employeeId",
              message: "Which employee do you want to update role?",
              choices: employees
            },
          ])
          .then(function (data) {
            connection.query(
              `UPDATE employee  SET ? WHERE ?`,
              [{ role_id: `${data.update}` }, { id: `${data.employeeId}` }],
              (err, res) => {
                if (err) throw err;
                menu();
              }
            );
          });
      });
    });
  },
  addEmployees() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "firstName",
          message: "What is the employee's first name?",
        },
        {
          type: "input",
          name: "lastName",
          message: "What is the employee's last name?",
        },
        {
          type: "input",
          name: "roleID",
          message: "What is the employee's role id?",
        },
        {
          type: "input",
          name: "managerID",
          message: "What is the employee's manager id?",
        },
      ])
      .then(function (data) {
        connection.query("INSERT INTO employee SET ?", {
          first_name: data.firstName,
          last_name: data.lastName,
          role_id: data.roleID,
          manager_id: data.managerID || null
        });
        console.log("Updating Employees.......");
        menu();
      });
  },
  viewEmployees() {
    connection.query("SELECT * FROM employee", (err, data) => {
      console.table(data);
      menu();
    });
  },
};


const role = {
  addRoles() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "title",
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
          department_id: data.departmentID
        });
        console.log("Updating Roles........");
        menu();
      });
  },
  viewRoles() {
    connection.query("SELECT * FROM role", (err, data) => {
      console.table(data);
      menu();
    });
  },
};
