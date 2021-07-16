use employeedb;
insert into department(name) values("Sales"),("Engineering"),("Finance"),("Legal");
insert into role(title,salary,department_id) values
("Sales Lead",100000,1),
("Sales Person",80000,1),
("Lead Engineer",150000,2),
('Account Manager', 160000, 3),
("Software Engineer",120000,2),
("Accountant",125000,3),
("Legal Team Lead", 250000,4),
("lawyer",190000,4);
insert into employee(first_name, last_name, role_id) values
("John","Doe",1),
("Mike","Chan",2),
("Ashley","Rodriguez",3),
("Kevin","Tupik",4),
("Malia","Brown",5),
("Sarah","Lourd",6),
("Tom","Allen",7),
("Eric", "Tupa", 8);

update employee set manager_id = 3 where id = 1;
update employee set manager_id = 1 where id = 2;
update employee set manager_id = 3 where id = 4;
update employee set manager_id = 6 where id = 7;
