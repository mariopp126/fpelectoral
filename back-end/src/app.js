var express = require('express');
const mysql = require('mysql')
const path = require('path');
const connection = require('./connection');
const cors = require('cors');
var app = express();

// With middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }))

app.listen(connection.port, function(err){
	if (err) console.log(err);
	console.log("Server listening on port", connection.port);
	//connection.connect();
});

//exports.app = app;
