// author.js - Author route module
var express = require('express');
var router = express.Router();

var articleServices = require('../services/articleServices');

router.post('/', function(req, res) {
	articleServices.extractArticleAuthorNames(req, function(err, response) {
		if (err)
			res.status(500).send('error: ' + err);
		else
			res.send(response);
	});
});

module.exports = router;