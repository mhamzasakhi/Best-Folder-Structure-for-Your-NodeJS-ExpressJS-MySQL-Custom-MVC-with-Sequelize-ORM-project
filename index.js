require('dotenv').config();

const express = require('express');
const http = require('http');

const app = express();

const db = require('./app/lib/appDb');

app.use(require('./app/routes/'));

const port = process.env.PORT || '3000';
const host = process.env.HOST || 'localhost';
const server = http.createServer(app);
server.listen(port, host, function (err) {
	console.log(`>>  Listening for requests on http://${host}:${port}`);
});