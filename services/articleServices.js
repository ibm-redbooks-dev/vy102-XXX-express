//Natural Language Understanding Watson Third Party Module and we specify which release we would like to call the Watson NLU Service.
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
	'version_date': NaturalLanguageUnderstandingV1.VERSION_DATE_2017_02_27
});

//error message for missing URL
const MISSING_URL_ERROR = 'URL not passed';

/*
 * Call Watson NLU Service to extract the list of author names of the requested article URL
 */
exports.extractArticleAuthorNames = function(req, callback) {

	//If the url is not passed, return error to the caller
	if (req === null || req.body === null || req.body.url === null) {
		callback(MISSING_URL_ERROR, null);
	}

	//url is the parameter passed in the post request to /author: It contains the URL of the article
	//metadata feature of NLU returns the author of the webpage, the page title, and the publication date.
	var parameters = {
		'url': req.body.url,
		'features': {
			'metadata': {}
		}
	};

	//Call the NLU Watson Service, and return to the caller the list of author names in case of success.
	natural_language_understanding.analyze(parameters, function(err, response) {
		if (err)
			callback(err, null);
		else
			callback(null, response.metadata.authors);
	});

};