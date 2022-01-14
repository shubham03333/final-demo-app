CREATE TABLE Product (
  Id INTEGER PRIMARY KEY auto_increment,
  Title VARCHAR(100),
  Description VARCHAR(300),
  Price FLOAT,
  CategoryId INTEGER
);

CREATE TABLE Category (
  Id INTEGER PRIMARY KEY auto_increment,
  Title VARCHAR(100),
  Description VARCHAR(300)
);

INSERT INTO Category (Title, Description) VALUES ('Electronics', 'Electronics products');
INSERT INTO Category (Title, Description) VALUES ('Computers', 'List of Computers');
INSERT INTO Category (Title, Description) VALUES ('TV', 'Televisions');
INSERT INTO Category (Title, Description) VALUES ('Gift', 'Gifts');
INSERT INTO Category (Title, Description) VALUES ('Fashion', 'Men and Women fashion accessories');