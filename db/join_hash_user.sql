SELECT *
FROM helo_users u
JOIN helo_credentials c ON u.user_id = c.user_id;
