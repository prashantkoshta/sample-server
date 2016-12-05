var express = require('express');
var router = express.Router();
/* GET users listing. */

// Public view page
router.get('/listofequation', function(req, res) {
	console.log("Called... /listofequation");
	var ar =[];
	for(var i =0;i<1000;i++){
		ar[i] = {"type":"Simple Interest","action":"SIMINT","pagename":"SI_Page","pageurl":"/calculator"}
	}
	/*
	[
            {"type":"Simple Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Compund Interest","action":"CMPINT","pagename":"SI_Page"},
            {"type":"Yeilds","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Simple Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Compund Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Yeilds","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Simple Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Compund Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Yeilds","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Simple Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Compund Interest","action":"SIMINT","pagename":"SI_Page"},
            {"type":"Yeilds","action":"SIMINT","pagename":"SI_Page"}
	]
	*/
	res.send(200,ar);
});


module.exports = router;