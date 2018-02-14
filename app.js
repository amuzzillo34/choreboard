
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

// Example route
// var user = require('./routes/user');
var htmlRouter = require(path.join(__dirname, './app/routes/htmlRoutes.js'))
var Chore = require(path.join(__dirname,'./app/data/chore.js'))

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);

//app.use(express.favicon());
//app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(express.cookieParser('IxD secret key'));
//app.use(express.session());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', htmlRouter)
app.use('/chorelist',htmlRouter)

// development only
//if ('development' == app.get('env')) {
  //app.use(express.errorHandler());
//}


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
