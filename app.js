'use strict'

const express    = require('express')
const bodyParser = require('body-parser')
const cors       = require('cors')
const app        = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.set('port', (process.env.PORT || 3001))

app.use('/', require('./routes'))

module.exports = app
