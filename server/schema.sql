-- CREATE DATABASE chat;

-- USE chat;

-- /* Create other tables and define schemas for them here! */
-- CREATE TABLE users (
--   id INT NOT NULL,
--   user_name VARCHAR(50) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE rooms (
--   id INT NOT NULL,
--   room_name VARCHAR(160) NOT NULL,
--   PRIMARY KEY (id)
-- );
-- ;
-- CREATE TABLE friends (
--   user_id INT NOT NULL,
--   friend_id INT NOT NULL,
--   PRIMARY KEY (user_id, friend_id),
--   FOREIGN KEY (user_id) REFERENCES users(id),
--   FOREIGN KEY (friend_id) REFERENCES users(id)
-- );

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   message_id VARCHAR(50) NOT NULL,
--   message_text VARCHAR(160) NOT NULL,
--   user_id INT NOT NULL,
--   room_id INT NOT NULL,
--   created_at TIMESTAMP NOT NULL,
--   updated_at TIMESTAMP,
--   PRIMARY KEY (message_id),
--   FOREIGN KEY (user_id) REFERENCES users(id),
--   FOREIGN KEY (room_id) REFERENCES rooms(id)
-- );


-- /*  Execute this file from the command line by typing:
--  *    mysql -u root < server/schema.sql
--  *  to create the database and the tables.*/

