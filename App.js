const {createElement} = require('react');

module.exports = function App() {
	return createElement('html', {},
		createElement('head', {},
			createElement('style', {}, 'body { font-family: "Comic Sans"; }')
		),
		createElement('body', {}, "Body!"),
	);
};
