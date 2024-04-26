'use strict'

const fs = require('fs')
const path = require('path')
const assert = require('assert')

const evlReduce = require('../index.js')

const eventLangString = fs.readFileSync(
	path.join(__dirname, 'fixture.yaml'),
	'utf8'
)
const expectedObject = {
	name: 'James Bond',
	job: 'husband'
}
const reducedObject = evlReduce(eventLangString)

assert.deepEqual(
	reducedObject,
	expectedObject
)
