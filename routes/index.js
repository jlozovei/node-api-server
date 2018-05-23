'use strict'

const express = require('express')
const router  = express.Router()


router.use('/publications', require('./publications'))


module.exports = router
