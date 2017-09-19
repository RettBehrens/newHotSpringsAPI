'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HotSpringsSchema = new Schema({
	name: {
		type: String,
		required: 'Enter the name of the hot springs'
	},
	latitude: {
		type: String,
		required: 'Enter the latitude'
	},
	longitude: {
		type: String,
		required: 'Enter the longitude'
	},
	temperature: {
		type: String,
		required: 'Enter the average water temperature'
	}
});

module.exports = mongoose.model('HotSprings', HotSpringsSchema);