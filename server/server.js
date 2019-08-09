require('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const PORT = SERVER_PORT || 4444
const authCtrl = require('./controllers/authControl')
const postCtrl = require('./controllers/postsControl')

// Middleware
app.use(express.json())

// Sessions
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10
    }
}))

// END POINTS AUTH
app.post('/api/auth/login', authCtrl.login)
app.post('/api/auth/register', authCtrl.register)

// END POINTS POSTS
app.get('/api/post/:userid', postCtrl.getUser)
app.get('/api/post/:postid', postCtrl.getPost)
app.post('/api/post/:userid', postCtrl.addPost)

// Massive
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(PORT, () => console.log(`The PORT returns ${PORT}`))
})