
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require("body-parser");
var app = express();

// Example route
// var user = require('./routes/user');
var htmlRouter = require(path.join(__dirname, './app/routes/htmlRoutes.js'))
var apiRouter = require(path.join(__dirname, './app/routes/apiRoutes.js'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var Chore = require(path.join(__dirname,'./app/data/chore.js'))


// all environments
app.set('port', process.env.PORT || 3000);
//app.use(express.static(path.join(__dirname, '\public')));
//app.use(express.favicon());
//app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(express.cookieParser('IxD secret key'));
//app.use(express.session());
//app.use(app.router);

app.use(htmlRouter)
app.use(apiRouter)
app.use(express.static('./app/public'))




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
