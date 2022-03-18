CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE usuarios (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    username varchar(20) UNIQUE NOT NULL,
    email varchar(30) UNIQUE NOT NULL,
    password varchar(15) NOT NULL,
    date DATE NOT NULL
)

INSERT INTO usuarios (username, email, password, date) VALUES ('Gloria', 'gloria@gmail.com', 1233, 2022-03-21)