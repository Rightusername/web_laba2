var express = require('express');
var bodyParser= require('body-parser')
var app = express();
var logic = require('./logic');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));




app.get('/', function (req, res) {
    res.sendFile( __dirname + "/public/" + "index.html" );
});


app.post('/test', function(req, res) {
    if(req.body.a && req.body.b && req.body.k) {
        if(+req.body.k<0.001) req.body.k = 0.004;
        logic.init(+req.body.a, +req.body.b, +req.body.k);
        res.send(JSON.stringify(logic.getData()));
    }
});


app.listen(3000, function () {
    console.log('listen on 3000');
});