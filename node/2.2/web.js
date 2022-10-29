var path = require ('path'),
    http = require('http'),
    fs = require('fs'),
    url = require ('url'),
    mime = require('mime');

var server = http.createServer();

function genericSend(code,message,response) {
    response.writeHead(code,{"Content-Type":"text/plain"});
    response.end(message);
};
server.on('request',function(request,response) {
    var urlParams = url.parse(request.url),
    filename=path.join('.',urlParams.pathname);

    path.exists(filename,function(exists) {
        if(!exists)
            return genericSend(404,"not found",response);

        fs.readFile(filename,'binary',function(err,file) {
            if(err)
                return genericSend(500,'internal server error',response);
            var type = mime.lookup(filename);
            response.writeHead(200,{'Content-Type':type});
            response.write(file,'binary');
            response.end;
        });
    });
});
server.listen(9000);