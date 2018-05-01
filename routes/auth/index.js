'use strict'

const auth = (req, resp, next) => {
	let token = req.body.token || req.query.token || req.headers['x-access-token']
	if(token)
		next()
	else
		return resp.status(403).send({ status: 'DENIED', msg: 'Null token' })
}

module.exports = auth