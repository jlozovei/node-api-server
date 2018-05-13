'use strict'

const config   = require('config')
const chai     = require('chai')
const chaiHttp = require('chai-http')
const app      = require('../../app')
const should   = chai.should()

const _date    = new Date().getTime()
const _token   = `_ourFancyToken${_date}`

chai.use(chaiHttp)

// variables to use while testing
let timestamp = new Date().getTime(),
	fictional = {
		message: 'This is a test post. It\'s only goal is to test our beautiful API. So, you can ignore it at your feed.',
		created_at: timestamp,
		author_github: 'jlozovei',
		deleted_at: '',
		stars: 100,
		reports: 0
	}


// endpoint tests
describe('Node API + MongoDB',  function(){
	this.timeout(7000)

	it('@GET all publications without token', (done) => {
		chai.request(app)
		.get('/publications')
		.end((err, response) => {
			const {body} = response
			
			response.should.have.status(403)
			done()
		})
	})

	it('@GET all publications with token', (done) => {
		chai.request(app)
		.get('/publications')
		.set('X-Access-Token', _token)
		.end((err, response) => {
			const {body} = response

			response.should.have.status(200)
			body.should.be.a('array')
			done()
		})
	})

	it('@POST a new publication', (done) => {
		chai.request(app)
		.post('/publications')
		.set('X-Access-Token', _token)
		.send(fictional)
		.then((response) => {
			const {body} = response

			response.should.have.status(200)
			body.should.be.a('object')

			fictional._id = body._id
			fictional.message = `${fictional.message}\nEdit -- remember: this is a test post!`
			done()
		})
	})

	it('@GET a single publication', (done) => {
		chai.request(app)
		.get(`/publications/${fictional._id}`)
		.set('X-Access-Token', _token)
		.then((response) => {
			const {body} = response

			response.should.have.status(200)
			body.should.be.a('object')
			done()
		})
	})

	it('@PUT a publication', (done) => {
		chai.request(app)
		.put(`/publications/${fictional._id}`)
		.set('X-Access-Token', _token)
		.send({ message: fictional.message, stars: fictional.stars++ })
		.then((response) => {
			const {body} = response

			response.should.have.status(200)
			body.should.be.a('object')
			done()
		})
	})

	it('@PUT increase publication stars', (done) => {
		chai.request(app)
		.put(`/publications/stars/${fictional._id}`)
		.set('X-Access-Token', _token)
		.send({ message: fictional.message, stars: fictional.stars + 10 })
		.then((response) => {
			const {body} = response

			response.should.have.status(200)
			body.should.be.a('object')
			done()
		})
	})

	it('@PUT increase publication reports', (done) => {
		chai.request(app)
		.put(`/publications/stars/${fictional._id}`)
		.set('X-Access-Token', _token)
		.send({ message: fictional.message, reports: fictional.reports + 1 })
		.then((response) => {
			const {body} = response

			response.should.have.status(200)
			body.should.be.a('object')
			done()
		})
	})

	it('@DELETE a publication', (done) => {
		chai.request(app)
		.delete(`/publications/${fictional._id}`)
		.set('X-Access-Token', _token)
		.then((response) => {
			const {body} = response

			response.should.have.status(200)
			body.should.be.a('object')
			done()
		})
	})
})
