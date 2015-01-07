'use strict';

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.set('port', 8007);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/app', express.static('app'));
app.use('/vendor', express.static('vendor'));


http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server at http://localhost:' + app.get('port'));
});
