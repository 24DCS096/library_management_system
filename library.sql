CREATE DATABASE library;

USE library;

CREATE TABLE books (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    author VARCHAR(100),
    quantity INT
);

CREATE TABLE issued_books (
    issue_id INT PRIMARY KEY AUTO_INCREMENT,
    book_id INT,
    student_name VARCHAR(100),
    issue_date DATE,
    return_date DATE
);
