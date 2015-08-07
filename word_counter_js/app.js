 var express = require('express');
 var app = express();

 app.get('/', function(request, response){
   response.send('hello world');
 });

 app.listen(4567, function(request, response){
   console.log('listening on port 4567')
 });
