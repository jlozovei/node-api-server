'use strict'

const config       = require('config')
const debug        = require('debug')('node_api:PublicationModel')
const mongo        = require('../db/mongo')
const {collection} = config.get('mongo.local')


module.exports = {
	find: (query, callback) => {
		mongo.collection(collection).find(query, callback)
	},

	findOne: (_id, callback) => {
		const query = { _id: mongo.ObjectId(_id) }

		mongo.collection(collection).findOne(query, callback)
	},

	create: (data, callback) => {
		mongo.collection(collection).insert(data, callback)
	},

	update: (_id, data, callback) => {
		const query = { _id: mongo.ObjectId(_id) }

		mongo.collection(collection).update(query, data, callback)
	},

	remove: (_id, callback) => {
		const query = { _id: mongo.ObjectId(_id) }

		mongo.collection(collection).remove(query, callback)
	}
}