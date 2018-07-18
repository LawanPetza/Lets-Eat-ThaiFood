-- Create the database and specified it for use.
CREATE DATABASE thaiFoodDB;
USE thaiFoodDB;

-- Create the table tasks.
CREATE TABLE thaiFood
(
	id int NOT NULL AUTO_INCREMENT,
	thaiFoodName varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT 0,
	date TIMESTAMP,
	PRIMARY KEY (id)
);