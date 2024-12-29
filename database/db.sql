-- creating the database
CREATE DATABASE IF NOT EXISTS crudnodejsmysql;

USE crudnodejsmysql;

-- creating a table
CREATE TABLE IF NOT EXISTS customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- Alter user authentication method
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY 'userpassword';

-- Show all tables
SHOW TABLES;

-- To describe the table
DESCRIBE customer;