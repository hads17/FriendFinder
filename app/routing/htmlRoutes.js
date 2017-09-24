var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');

module.exports = function(app){

    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })

    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}
