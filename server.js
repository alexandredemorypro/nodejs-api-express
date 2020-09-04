'use strict';
const bodyParser = require('body-parser');
const routes = require('./routes');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 2990;

app.set('port', PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/exemple', routes.exemple);

app.use((req, res, next) => {
	const err = new Error(`${req.method} ${req.url} Not Found`);
	err.status = 404;
	next(err);
});
app.use((err, req, res, next) => {
	console.error(err);
	res.status(err.status || 500);
	res.json({
		error: {
			message: err.message,
		},
	});
});

app.listen(app.get('port'), () => {
	console.log(`Server running on port ${app.get('port')}`);
});