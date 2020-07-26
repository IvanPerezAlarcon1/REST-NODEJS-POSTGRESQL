CREATE DATABASE firstapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY, /*autoincrementable, cada vez que se crea un usuario aumenta el numero de registros asi como su id*/
    name VARCHAR(60),
    email TEXT
);

INSERT INTO users (name,email) VALUES
    ('joe', 'joe@ibm.com'),
    ('ryan','ryan@web1.com');