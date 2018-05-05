'use strict'

const debug            = require('debug')('node_api:PublicationController')
const PublicationModel = require('../models/PublicationModel')


module.exports = {
	getAll: (request, response, next) => {
		response.status(201)
		response.json({ status: 'OK', message: 'Your request was successfully received' })
	},

	getById: (request, response, next) => {
		response.status(201)
		response.json({ status: 'OK', message: 'Your request was successfully received' })
	},

	create: (request, response, next) => {
		response.status(201)
		response.json({ status: 'OK', message: 'Your request was successfully received' })
	},

	update: (request, response, next) => {
		response.status(201)
		response.json({ status: 'OK', message: 'Your request was successfully received' })
	},

	updateStars: (request, response, next) => {
		response.status(201)
		response.json({ status: 'OK', message: 'Your request was successfully received' })
	},

	updateReport: (request, response, next) => {
		response.status(201)
		response.json({ status: 'OK', message: 'Your request was successfully received' })
	},

	remove: (request, response, next) => {
		response.status(201)
		response.json({ status: 'OK', message: 'Your request was successfully received' })
	}
}