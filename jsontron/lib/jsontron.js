module.exports = require('../node_modules/jsonpath/lib/index');
 /* var cities = [
	  { name: "London", "population": 8615246 },
	  { name: "Berlin", "population": 3517424 },
	  { name: "Madrid", "population": 3165235 },
	  { name: "Rome",   "population": 2870528 }
	];

	var jp = require('jsonpath');
	var names = jp.query(cities, '$..name');
console.log(names);

**/

var jp = require('jsonpath');

//var schTRON = require("../data/schematron-instance-minimal-complex.json");
var schInstance = require("../data/loandata-instance-simple.json");
var myRule = require("../data/loandata-instance-single-rule.json");

console.log(schInstance);
console.log(myRule);


var loanid = jp.query(schInstance, '$.loan_data.loans[0].loan_id');
//var result = eval("loanid > 1 && loanid < 2234567");
//var phases = jp.query(schTRON, '$..phase[1].active');
//var pattern2 = jp.query(schTRON, '$..pattern');

var loanid2 = jp.query(schInstance, '$.loan_data.loans[0].loan_id < 1)');


console.log("LoanID: "+ loanid);
console.log("LoanID2: "+ loanid2);
//console.log("Result: "+ result);
console.log(loanid.length);
//console.log(pattern2);


var myAssert = {
        "id":"assert id 1",
        "test": "loanid < 1 && loanid < 2234567",
        "message": "Assert 1: Loan ID cannot be less than 1 or greater than 2234567"
     };

var parseAssert = function (assert){
	
	let result = eval(assert.test); // TODO: do strict eval for security reasons
	
	return {"id":assert.id, "result":result, "message":assert.message};
	
}

var parsedAssert = parseAssert(myAssert);


var validateAssert = function (parsedAssert){
	let msg = parsedAssert.result ? "successful" : parsedAssert.message;
	console.log ("Test: "+ parsedAssert.result);
	console.log ("Message: " + msg);


}

validateAssert(parsedAssert);

var  parseRule = function(instance, rule){
	
	// first parse the context
	
	parsedContext = jp.query(instance, rule.context)
	console.log(parsedContext);
	
}

parseRule(schInstance, myRule);
