 var express = require('express');
 var app = express();
 var exphbs = require('express3-handlebars');
 app.engine('handlebars', exphbs({defaultLayout: 'main'}));
 app.set('view engine', 'handlebars');
 app.use(bodyParser.urlencoded({ extended: true }));

 app.use('/public', express.static('public'));

 app.get('/', function(request, response){
   response.render("index");
 });

 app.get('/word_count', function(request, response){
   console.log(request.params.body);
   response.render('word_count');
 });

 app.listen(4567, function(request, response){
   console.log('listening on port 4567')
 });

 module.exports = app;
