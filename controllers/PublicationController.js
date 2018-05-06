'use strict'

const debug            = require('debug')('node_api:PublicationController')
const PublicationModel = require('../models/PublicationModel')


module.exports = {
	getAll: (request, response, next) => {
		PublicationModel.find({ deleted_at: "" }, (err, data) => {
			if(err)
				return next(err)
		    
		    response.json(data.reverse())
		})
	},

	getById: (request, response, next) => {
		const {_id} = request.params

		PublicationModel.findOne(_id, (err, data) => {
			if(err)
				return next(err)

			response.json(data)
		})
	},

	create: (request, response, next) => {
		const {body} = request

		PublicationModel.create(body, (err, data) => {
			if(err)
				return next(err)

			response.json(data)
		})
	},

	update: (request, response, next) => {
		const {_id} = request.params,
			{body} = request

		PublicationModel.update(_id, body, (err, data) => {
			if(err)
				return next(err)
			
			response.json(data)
		})
	},

	updateStars: (request, response, next) => {
		const {_id} = request.params,
			{body} = request

		PublicationModel.update(_id, { $set: { stars: body.stars } }, (err, data) => {
			if(err)
				return next(err)
			
			response.json(data)
		})
	},

	updateReport: (request, response, next) => {
		const {_id} = request.params,
			{body} = request

		PublicationModel.update(_id, { $set: { reports: body.reports, deleted_at: new Date().getTime() } }, (err, data) => {
			if(err)
				return next(err)
			
			response.json(data)
		})
	},

	remove: (request, response, next) => {
		const {_id} = request.params

		PublicationModel.remove(_id, (err, data) => {
	    	if(err)
				return next(err)
		
			response.json(data)
		})
	}
}