// See http://expressjs.com/

var express = require('express');
var app = express.createServer();

app.get('/', function(req, res){
    res.send('Hello World');
});
app.get('/products', function(req, res){
    res.send('We have lots of products!');
});
app.get(/^\/product\/([A-Za-z]{3}\d{3,5})$/, function(req, res){
    res.send('Product ' + req.params[0] + ' is our best selling product!');
});
app.get('/service/:id', function(req, res){
    res.send('Service ' + req.params.id + ' is currently unavailable.');
});
app.get('/services', function(req, res){
    res.send('Our services are awesome');
});

app.listen(3000);
