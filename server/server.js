require('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env 
const PORT = SERVER_PORT || 4444

// Middleware
app.use(express.json())

app.listen(PORT, () => console.log(`The PORT returns ${PORT}`))