'use strict'

const express = require('express')
const auth    = require('./auth')
const router  = express.Router()


router.get('/', auth, (request, response) => {
	response.status(201)
	response.json({ status: 'OK', message: 'Your request was successfully received' })
})


module.exports = router