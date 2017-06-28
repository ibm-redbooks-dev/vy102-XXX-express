/**
 * Copyright 2017 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var port = process.env.VCAP_APP_PORT || 8080;

//Express Web Framework, and create a new express server
var express = require('express'),
	app = express();

var path = require('path');

var bodyParser = require('body-parser');
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}));

//Routes modules
var index = require('./routes'),
    author = require('./routes/author');
	
//In case the caller access any resource under the root /, call index route
app.use('/', index);

//In case the caller access any resource under /author, call author route
app.use('/author', author);

// start server on the specified port and binding host
app.listen(port);