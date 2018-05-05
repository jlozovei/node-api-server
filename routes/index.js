'use strict'

const express = require('express')
const auth    = require('./auth')
const router  = express.Router()


router.use('/publications', require('./publications'))


module.exports = router