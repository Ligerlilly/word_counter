 require('./lib/word_counter');
 var express = require('express');
 var app = express();
 var exphbs = require('express3-handlebars');
 var bodyParser = require('body-parser');

 app.engine('handlebars', exphbs({defaultLayout: 'main'}));
 app.set('view engine', 'handlebars');
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());

 app.use('/public', express.static('public'));

 app.get('/', function(request, response){
   response.render("index");
 });

 app.post('/word_count', function(request, response){

   response.render('word_count', {
     helpers: {
       word_count: function(){
         return request.body['string'].word_counter(request.body['test_word']);
       },
       test_word: function(){ return request.body['test_word']; },
       string: function(){ return request.body['string']; }
     }
   });
 });

 app.listen(4567, function(request, response){
   console.log('listening on port 4567')
 });

 module.exports = app;
