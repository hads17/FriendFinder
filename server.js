// Requiring node packages
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var friends = require('./app/data/friends.js')

// initializing express
var app = express();
var PORT = process.env.PORT || 2525;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname, 'app/public')));
 
require('./app/routing/htmlRoutes.js')(app);

require('./app/routing/apiRoutes.js')(app);




// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});