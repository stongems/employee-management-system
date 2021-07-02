drop database if exists employeedb;
create database employeedb;
use employeedb;

create table department(
id INTEGER NOT NULL AUTO_INCREMENT primary key,
name VARCHAR(30)
);

create table role(
id INTEGER NOT NULL auto_increment primary key,
title VARCHAR(30),
salary decimal(10,2),
department_id INTEGER NOT NULL,
foreign key(department_id) references department(id)
);

create table employee(
id INTEGER NOT NULL auto_increment primary key,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id integer,
manager_id integer,
foreign key(role_id) references role(id),foreign key(manager_id) references employee(id)
)
