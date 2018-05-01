'use strict'

const express    = require('express')
const bodyParser = require('body-parser')
const cors       = require('cors')
const app        = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())


app.listen(3001, () => {
	console.log(`Server up and running at localhost:3001`)
})

app.get('/', (request, response) => {
	response.status(201)
	response.json({ status: 'OK', message: 'Your request was successfully received' })
})

module.exports = app