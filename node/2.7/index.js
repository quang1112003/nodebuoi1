var express = require('express');
var app = express();

app.get('/', function(req,res) {
    req.send("this is my first node app.")
});

app.listen(8080, function () {
    console.log("server listen on port 8080");
})