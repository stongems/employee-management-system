# Employee-Management-System
HW #12 UofA coding bootcamp

## Description

This application runs with Node.js and MySQL. The user can view and save information about their department, roles, and employees to a MySQL database. 

## Table of Contents

* [License](#license)

* [Installation](#installation)

* [Usage](#usage)

* [Credits](#credits)

* [Questions](#questions)

---

## License
 
> [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)

## Installation

To install needed dependencies, right-click on the db.js directory, open the integrated terminal, and run command:

```
npm i
```

If the package.json file is missing, run these following commands:

```
npm init -y
```
```
npm i inquirer
```
```
npm i mysql
```

## Usage

To initialize the app, right-click on the db/ directory and open the integrated terminal. Start the mysql dependency with this command:

```
mysql -u root
```

To create the tables copy the absolute path of the schema.sql. Then type in source in the terminal and paste the path:

```
source: <file path to schema.sql>
```

If you would like to seed the table with the created values, then copy the "absolute path" to seed.sql and run this in the terminal:

```
source: <file path to seed.sql>
```

Once you have seeded the tables, type exit in the terminal then press enter.

To view the tables and edit their content, run the following command:

```
node index.js
```

Inquirer will prompt you with a list of options to view, update, or add to the tables.

> For the video demo of this app, [Watch Here](https://drive.google.com/file/d/1nDNyiyl8ZSgzqtP8v3pzlDD9UH3Mb_HB/view)

## Credits

MIT badge is displayed using another GitHub user links [Lukas Himsel](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

## Questions

If you feel you have any questions, please feel free to reach out to me at stonge.ms@gmail.com