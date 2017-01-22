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
var myPattern = require("../data/loandata-instance-single-pattern.json");
var myPatterns = require("../data/loandata-instance-single-schemaWithPatterns.json");

console.log(schInstance);
console.log(myRule);


var loanid = jp.query(schInstance, '$.loan_data.loans[0].loan_id');
//var result = eval("loanid > 1 && loanid < 2234567");
//var phases = jp.query(schTRON, '$..phase[1].active');
//var pattern2 = jp.query(schTRON, '$..pattern');

var loanid2 = jp.query(schInstance, '$.loan_data.loans[0].loan_id');


console.log("LoanID: "+ loanid);
console.log("LoanID2: "+ loanid2);
//console.log("Result: "+ result);
console.log(loanid.length);
//console.log(pattern2);


var myAssert = {
        "id":"assert id 1",
        "test": "jp.query(context,'$[0][0].loan_id') < 1 && jp.query(context,'$[0][0].loan_id') < 2234567",
        "message": "Assert 1: Loan ID cannot be less than 1 or greater than 2234567"
     };

var parseAssert = function (assert){
	
	//console.log(ruleContext);
	//console.log(jp.query(ruleContext, "$[0].loan_id"));
	let mytest = assert.test;
	console.log("MyTest Before: " + mytest);
	mytest = mytest.replace(/context/ig,'parsedContext');
	console.log ("MyTest After: "+ mytest);
	
	//let result = eval(jp.query(ruleContext, "$..loan_id") < 1 && jp.query(ruleContext, "$..loan_id") < 2234567);
	let result = eval(mytest); // TODO: do strict eval for security reasons
	
	return {"id":assert.id, "result":result, "message":assert.message};
	
}

var ruleCtx = jp.query(schInstance, '$.loan_data.loans[1]');
// var parsedAssert = parseAssert(myAssert);


var validateAssert = function (parsedAssert){
	let msg = parsedAssert.result ? "successful" : parsedAssert.message;
	console.log ("Test: "+ parsedAssert.result);
	console.log ("Message: " + msg);


}

//validateAssert(parsedAssert);

var parseRule = function(rule){
	
	let asserts = [];
	asserts = rule.assert;
	return asserts;
}

var  validateRule = function(instance, rule){
	
	// first parse the context
	parsedContext = jp.query(instance, rule.context)
	console.log(parsedContext);
	
	// get all asserts for the rule
	let asrts = [];
	asrts = parseRule(rule);
	
	//parse and validate all asserts
	asrts.forEach(function(element){
		
		console.log(element);
		let parAssert = parseAssert(element);
		validateAssert(parAssert);
		
			})
	
}

console.log ("Starting to process the Patterns......");
console.log ("======================================");

var parsePattern = function(spattern){
	//console.log(spattern);
	let myRuleList = [];
	myRuleList = spattern.rule;
	return myRuleList;
	
}

//parsePattern(myPattern);
console.log ("======================================");
console.log ("End of processing the Patterns......");
console.log ("======================================");

//console.log(myPattern);

//validateRule(schInstance, myRule);

var  validatePattern = function(pInstance, pattern){
	
	let rls = [];
	rls = parsePattern(pattern);
	console.log("Below are the rules: ")
	console.log(rls);
	console.log("Rules have been parsed. ")
	
	//parse and validate all asserts
	rls.forEach(function(element){
		
		//console.log(element);
		//let parRle = parsePattern(element);
		console.log("Reading the rule:");
		console.log(element);
		console.log("Rule reading done.");
		console.log(element.context);
		console.log("The above is context");
		validateRule(pInstance, element);
		
			})
	
}

//validatePattern(schInstance, myPattern);

var parsePatterns = function(psSchema){
	
	var patterns = [];
	patterns = psSchema.schema.pattern;
	console.log(patterns);
	return patterns;
	
}

//parsePatterns(myPatterns);

var validatePatterns = function(psInstance, psSchema){
	
	var psPatterns = [];
	psPatterns = parsePatterns(psSchema);
	
	psPatterns.forEach(function(element){
		
		console.log("Validating the pattern....");
		//console.log(element);
		validatePattern(psInstance, element);
		console.log("Validated the pattern.");
	})
	
	
}

validatePatterns(schInstance, myPatterns);
