const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;


const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, 'react-ui/build')));
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
	response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
	console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");


//hey, this is a comment