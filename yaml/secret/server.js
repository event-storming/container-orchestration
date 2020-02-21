
var os = require('os');
var fs = require('fs');
var http = require('http');
var handleRequest = function(request, response) {
 fs.readFile('/tmp/db-password/user.property',function(err,userid){
   response.writeHead(200);
   response.write("user id  is "+userid+" \n");
   fs.readFile('/tmp/db-password/password.property',function(err,password){
     response.end(" password is "+password+ "\n");
   })
 })
 console.log("["+
Date(Date.now()).toLocaleString()+"] "+os.hostname());
}
var www = http.createServer(handleRequest);
www.listen(8080);

