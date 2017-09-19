'use strict'

var mongoose = require('mongoose'),
	HotSpring = mongoose.model('HotSprings');

exports.show_all_hotsprings = function(req, res) {
	HotSpring.find({}, function(err, hotspring) {
		if (err)
			res.send(err);
		res.json(hotspring);
	});
};

exports.create_a_hotspring = function(req, res) {
	var new_hotspring = new HotSpring(req.body);
	console.log(new_hotspring);
	new_hotspring.save(function(err, hotspring) {
		if (err)
			res.send(err);
		res.json(hotspring);
	});
};

exports.show_a_hotspring = function(req, res) {
	HotSpring.findById(req.params.hotspringId, function(err, hotspring) {
		if (err)
			res.send(err);
		res.json(hotspring);
	});
};

exports.update_a_hotspring = function(req, res) {
	HotSpring.findOneAndUpdate({_id: req.params.hotspringId}, req.body, {new: true}, function(err, hotspring) {
		if (err)
			res.send(err);
		res.json(hotspring);
	});
};

exports.delete_a_hotspring = function(req, res) {
	HotSpring.remove({
		_id: req.params.hotspringId
	}, function(err, hotspring) {
		if (err)
			res.send(err);
		res.json({ message: 'hotspring successfully deleted' });
	});
};