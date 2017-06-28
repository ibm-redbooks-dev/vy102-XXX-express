// index.js - Index route module
var express = require('express');
var router = express.Router();

//Provides utilities for dealing with directories
var path = require('path');

// Home page route
router.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;
