const inquirer = require("inquirer");
const figlet = require("figlet");
const { all, role, department, employee } = require("./controllers");

role.updateRole();

// // Displays start graphic and starts the init function
// const start = () => {
//   figlet(
//     " E - M - S ",
//     {
//       font: "Big",
//     },
//     (err, data) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log("\n");
//       console.log(data);
//       console.log("       ****************************************");
//       console.log(
//         "\n                    Welcome to Matt's \n             Employee Management System"
//       );
//       console.log("\n       ****************************************");
//       menu();
//     }
//   );
// };
// start();

// function menu() {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         message: "What do you want to do?",
//         name: "Menu",
//         choices: [
//           "Add Departments",
//           "Add Roles",
//           "Add Employees",
//           "View Departments",
//           "View Roles",
//           "View Employees",
//           "Update Employee Roles",
//         ],
//       },
//     ])
//     .then(function (response) {
//       if (response.Menu === "Add Departments") {
//         department.addDepartment();
//       } else if (response.Menu === "Add Roles") {
//         employee.addRoles();
//       } else if (response.Menu === "Add Employees") {
//         employee.addEmployees();
//       } else if (response.Menu === "View Departments") {
//         department.viewDepartments();
//       } else if (response.Menu === "View Roles") {
//         role.viewRoles();
//       } else if (response.Menu === "View Employees") {
//         employee.viewEmployees();
//       } else if (response.Menu === "Update Employee Roles") {
//         role.updateEmployeeRoles();
//       } else if (response.Menu === "Delete Employee") {
//         all.deleteEmployee();
//       } else {
//         console.log("Good-bye");
//         process.exit(0);
//       }
//     });
// }
