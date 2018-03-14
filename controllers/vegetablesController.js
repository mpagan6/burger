var bcrypt = require('bcryptjs');
var express = require('express');
var router  = express.Router();
var connection = require('../config/connection.js')

router.get('/', function(req,res) {
	var query= 'SELECT * FROM vegetables';
	connection.query(query, function(err, vegetables) {
		res.json(vegetables);
		
		});

	});

router.post('/create', function(req,res) {
	//make sure user inserting is a customer
	
		var query = "INSERT INTO vegetables (veg_name) VALUES (?)"

		connection.query(query, [ req.body.vege_name ], function(err, response) {
			res.redirect('/vegetables')
			
		})
	});
	
module.exports = router;
