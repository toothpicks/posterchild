
var fs = require('fs');
var ini = require('ini');
var express = require('express');

var cfg = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));
var app = new express();

// use static files.
app.use(express.static('webroot'));

app.get('/', function (req,res) {
    res.send('Hello');
});

app.listen(cfg.server.port, function () {
    console.log('Application started on port ' + cfg.server.port);
});

