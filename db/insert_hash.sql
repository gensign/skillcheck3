INSERT INTO helo_credentials(user_id, hash)
VALUES(${user_id}, ${hash})
RETURNING hash;