var http = require('http');
var httpServer = http.createServer(function (req,res){
    res.end("Hello world");
});

httpServer.listen(8080, function() {
    console.log("server listening on port 8080");
})