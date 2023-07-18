const express = require('express')
// const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

db.connect()

//habilita server para receber dados via post (forms)
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))