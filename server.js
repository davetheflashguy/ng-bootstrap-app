var connect = require('connect');
var port = 8080;

connect.static.mime.define({
	'application/font-woff': ['woff']
});

connect()
	.use(connect.compress())
	.use(connect.static('build'))
	.listen(port);

console.log('\nStatic file server running at http://localhost:' + port + '/\n\nCTRL + C to shutdown server');
