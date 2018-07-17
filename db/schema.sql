-- Create the database and specified it for use.
CREATE DATABASE thaifood_db;
USE thaifood_db;

-- Create the table tasks.
CREATE TABLE thaifood
(
	id int NOT NULL AUTO_INCREMENT,
	thaifood_name varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT 0,
	date TIMESTAMP,
	PRIMARY KEY (id)
);