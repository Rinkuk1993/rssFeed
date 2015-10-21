var express = require('express');
var app = express();

//Server
app.set('port', (process.env.PORT || CONFIG.port));

var server = app.listen(app.get('port'), function () {

	var port = server.address().port;

	console.log('Example app listening');

})

/*Home page*/
app.get('/', function (req, res) {
	res.sendFile(__dirname +'/index.html');
})

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){
	res.sendFile( __dirname + req.params[0]); 
});

