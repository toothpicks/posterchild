
var fs = require('fs');
var ini = require('ini');
var cons = require('consolidate');
var express = require('express');

var cfg = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));
var app = new express();

// use static files.
app.use(express.static('webroot'));

app.engine('html', cons.hogan);

app.set('view engine', cfg.templates.view_engine);
app.set('views', cfg.templates.view_base_path);

app.get('/', function (req,res) {
    res.send('Hello');
});

app.get('/test', function(req, res)
{
    res.render('test/test', {
        title: 'hello.'
    });
});

app.listen(cfg.server.port, function () {
    console.log('Application started on port ' + cfg.server.port);
    console.log('View engine: ' + app.get('view engine'));
    console.log('View dir: ' + app.get('views'));
});

