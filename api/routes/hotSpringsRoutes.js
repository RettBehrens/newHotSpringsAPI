'use strict';

module.exports = function(app) {
	var hotSprings = require('../controllers/hotSpringsController');

	// hotSprings routes
	app.route('/hotsprings')
		.get(hotSprings.show_all_hotsprings)
		.post(hotSprings.create_a_hotspring);

	app.route('/hotsprings/:hotspringsId')
		.get(hotSprings.show_a_hotspring)
		.put(hotSprings.update_a_hotspring)
		.delete(hotSprings.delete_a_hotspring);
};