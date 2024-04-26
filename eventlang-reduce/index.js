'use strict'

let yaml = require('js-yaml')

module.exports = function (eventLangString) {
	let eventMap = yaml.safeLoad(eventLangString)
	let reducedObject = {}

	for (let timestamp in eventMap)
		Object.assign(reducedObject, eventMap[timestamp])

	return reducedObject
}
