var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	HotSpring = require('./api/models/hotSpringsModel'),
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/HotSpringdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/hotSpringsRoutes');
routes(app);

app.listen(port);

console.log('hot springs RESTful API server started on: ' + port);