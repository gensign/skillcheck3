SELECT *
FROM helo_users u
JOIN helo_posts p ON u.user_id = p.author_id;