require('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const PORT = SERVER_PORT || 4444

// Middleware
app.use(express.json())
// Sessions


// END POINTS AUTH


// END POINTS POSTS

// Massive
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(PORT, () => console.log(`The PORT returns ${PORT}`))
})