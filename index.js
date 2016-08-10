const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config({silent: true})

const app = express()

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())

app.use((error, request, response, next) => {
  response.status(error.status || 500 )
  response.json({ error: error.message })
})

const users = require('./routes/users')
const login = require('./routes/login')

app.use('/users', users)
app.use('/login', login)

app.get('/', (request, response) => {
  response.send("Waddup")
})


const server = app.listen(3000, (() => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('We are a go on 3000!')
}))
