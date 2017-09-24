var friends = require('../data/friends.js')
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        //console.log(req.body);
        var friends = friends;
        var user = req.body;
        var scoreDiff = [];
        var bestFriend = 0;

        for (var i = 0; i < friends.length; i++) {
            var sum = 0;
            for (var x in friends[i].scores) {
                sum = sum + Math.abs(parseInt(user.scores[x]) - parseInt(friends[i].scores[x]));
            }
            scoreDiff.push(sum);
            if ((i > 0) && (scoreDiff[bestFriend] > scoreDiff[i])) {
                //console.log(bestFriend);
                bestFriend = i;
            }
        }
        people(user);
        //console.log(scoreDiff);
        res.json(friends[bestFriend]);
    });
}