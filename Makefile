bundle.js: index.js App.js
	./node_modules/.bin/esbuild $< --bundle --outfile=$@
