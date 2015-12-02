var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('STAGING, Hello World');
});

var port = Number(process.env.PORT || 3000)
server.listen(port, function() {
	console.log("Heroku app test is running on port ==>" + port); 
}); 