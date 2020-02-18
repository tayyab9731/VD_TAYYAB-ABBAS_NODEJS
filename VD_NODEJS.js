var http = require('http');

var fs=require('fs')

http.createServer(function(req, res) {
    fs.readFile('myfile.txt','utf8',function(err,data){
        res.writeHead(200, {'Content-Type': 'text'});
        res.write(data);
        res.end();
    });
}).listen(4000);