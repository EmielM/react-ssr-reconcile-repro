const express = require('express');
const app = express();

const {createElement} = require('react');
const App = require('./App');
const {renderToPipeableStream} = require('react-dom/server');
const path = require('path');

app.get('/', (req, res) => {
	const { pipe } = renderToPipeableStream(createElement(App), {
		bootstrapScripts: ['/bundle.js'],
		onShellReady() {
			res.setHeader('content-type', 'text/html');
			pipe(res);
		}
	});
});

app.get('/bundle.js', (req, res) => {
	res.setHeader('content-type', 'application/javascript');
	res.sendFile(path.join(__dirname, 'bundle.js'));
});

app.listen(3000, () => {
	console.log("running");
});
