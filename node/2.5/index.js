var http = require('http');;
var httpServer = http.createServer(function(req,res) {
    var queryObject = url.parse(req.url, true).query;
    var greeting = queryObject.greeting || 'Default greeting';;
    res.end('this is my first node app' + greeting);
});

httpServer.listen(8080, function() {
    console.log('Server listent to port 8080');
});