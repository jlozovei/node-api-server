'use strict'

const mongojs = require('mongojs')
const config  = require('config')
const debug   = require('debug')('node_api:db')


function __connection() {
	const {username, password, server, port, database} = config.get(`mongo.${process.env.NODE_ENV}`)
	const auth = username ? `${username}:${password}@` : ''
	const connection = `mongodb://${auth}${server}:${port}/${database}`

	debug(`connection string: ${connection}`)

	return connection
}


let db = mongojs(__connection())

db.on('error', (err) => {
	debug(err)
})


module.exports = db
