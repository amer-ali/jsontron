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
var mySchema = require("../data/loandata-instance-single-schemaWithPatternsNPhases.json");

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

/**
 * Report function will contain an arry of errors
 * @method addError will be called to add new erros
 * 
 * 
 */
var Report = function(){
	
	this.errors = [];
	this.warnings = [];
	
	
}

Report.prototype.addError = function(instance, schema, attr,msg,detail){
	
	this.errors.push({
		schInstance : instance,
		schema : schema,
		attribute: attr,
		message : msg,
		detail : detail
	});
	
}

Report.prototype.addWarning = function(instance, schema, attr,msg,detail){
	
	this.warnings.push({
		schInstance : instance,
		schema : schema,
		attribute: attr,
		message : msg,
		detail : detail
	});
	
}

myReport = new Report(); // Report Array will hold all the errors during the processing


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
/**
var parsePatterns = function(psSchema){
	
	var patterns = [];
	patterns = psSchema.schema.pattern;
	console.log(patterns);
	return patterns;
	
}
*/

/**
 * Parse patterns from a list of pattern ids or all patterns if no list is given
 * @param {Schematron Schema} This is the Schematron Rules Schema file
 * @param [Pattern ID Array] This optional parameter takes an array of pattern ids that will be parsed
 * @return [ Patterns Array] Returns an array of pattern objects based on list of ids provided or all patterns in the schema if list is not provided or invalid list is provided
 * @ISO:Pattern The Schematron schema should contain at least one pattern
 */

var parsePatterns = function(psSchema, patternsList){
	//TODO: don't process the duplicate patterns, currently if the patternsList has duplicate patterns, it will process it twice
	
	let patterns = []; // Array to hold the parsed patterns
	let tempPatterns = [];
	try{
	tempPatterns = psSchema.schema.pattern; // get all the patterns in the schema, then the list will be filtered based on the ids provided
	
	//console.log(patternsList.length);
	//console.log(tempPatterns);
	// @ISO:PATTERN the schema should have atleast 1 pattern defined
	if(!tempPatterns || !Array.isArray(tempPatterns) || tempPatterns.length < 1){ // if no pattern found
		
		console.log("Invalid Schema : Need atleast 1 Pattern...");
		console.log(typeof tempPatterns);
		myReport.addError(this, psSchema, "Pattern", "No Pattern found", "The Schematron rules/schema file should contain atleast 1 pattern");
		return; //FIXME: use proper return clause
		
	}
	
	//if patterns list undefine, not an array, empty or contains empty string, all patterns are returned
	else if(!patternsList||!Array.isArray(patternsList) || patternsList.length < 1 || patternsList[0]==''){
	
		myReport.addWarning(this, psSchema, "Pattern", "Invalid pattern list", "Since no valid list is provided - All patterns will be processed");
		patterns = tempPatterns;
	}
		
	else{
		try{
		let processedPatterns = []; //keep track of valid patterns in the requested list
		console.log("Patterns Requested: "+patternsList);
		tempPatterns.forEach(function(oElement){
		
			patternsList.forEach(function(iElement){
				try{
				if(iElement == oElement.id){
					patterns.push(oElement);
					processedPatterns.push(iElement);
					console.log("Parsing Pattern: " + oElement.id);
			}
				}
				catch(e){
					myReport.addError(this, psSchema, "Pattern", "Parsing Error: "+ e.message, e.stack);
				}
			
		})
	
	})
	console.log(patternsList.length + " Pattern(s) Requested. \n"+patterns.length + " Pattern(s) Processed. \n"+ (patternsList.length - patterns.length) + " Pattern(s)  Ignored.");
		try{
			let diffPatterns = patternsList.length - processedPatterns.length;
			if(diffPatterns > 0){ // it means there some invalid patterns are requested
				myReport.addError(this, psSchema, "Pattern", "Invalid Pattern IDs Requested", "Patterns Requested: "+patternsList + " Patterns Processed: "+processedPatterns);
				
			}
			
		}catch(e){
			myReport.addError(this, psSchema, "Pattern", "Parsing Error: "+ e.message, e.stack);
		}
	}catch (e){
		
		myReport.addError(this, psSchema, "Pattern", "Parsing Error: "+ e.message, e.stack);
	}
	}
	}catch(e){
		myReport.addError(this, psSchema, "Pattern", "Parsing Error: "+ e.message, e.stack);
	}
	
	console.log(patterns);
	return patterns;
	
}

//parsePatterns(myPatterns);

var validatePatterns = function(psInstance, psSchema, patternsList){
	
	var psPatterns = [];
	psPatterns = parsePatterns(psSchema, patternsList);
	
	psPatterns.forEach(function(element){
		
		console.log("Validating the pattern....");
		//console.log(element);
		validatePattern(psInstance, element);
		console.log("Validated the pattern.");
	})
	
	
}

//validatePatterns(schInstance, myPatterns);

console.log("Parsing the phase.....");
var parsePhases = function(phSchema, phaseList){
	console.log(phaseList);
	console.log(typeof phaseList);
	var activePatterns = [];
	var myPhases = [];
	let tempPhaseList = phSchema.schema.phase;
	
	//if schema doesn't have any phases defined, then all patterns are active
	if(!tempPhaseList){
		
		let allPatterns = phSchema.schema.pattern;
		allPatterns.forEach(function(element){
			activePatterns.push(element.id);
			
		})
		
	}

	else if (typeof phaseList == 'undefined'){
		//no phase is mentioned so process all phases
		myPhases = tempPhaseList;
		console.log("Inside Undefined if");
	}
	else if(typeof phaseList == 'string' && phaseList.toUpperCase() =='ALL'){
		
		myPhases = tempPhaseList;
		console.log("Inside ALL if");
	
		}
	
	else if (typeof phaseList == 'string' && phaseList.toUpperCase() =='DEFAULT'){
		
		console.log("Inside DEFAULT if");
		let dPhase = phSchema.schema.defaultPhase;
		console.log(dPhase);
			if (!dPhase){ // If the defaultPhase is not defined or is empty, then all phases are active
				myPhases = tempPhaseList;
			}
			else{
			tempPhaseList.forEach(function(element){
				
				if(element.id == dPhase){
					
					myPhases.push(element);
				}
			
		});
			//if defaultPhase cannot be found in phaseList
			if(myPhases.length < 1){
				
				console.log("Inside invalid defaultPhase inner if");
				myPhases = tempPhaseList;
			}
			
			}
	}
	
	else if (Array.isArray(phaseList) && phaseList.length > 0){
		
		console.log("Inside Array if");
		tempPhaseList.forEach(function(oElement){
			
			phaseList.forEach(function(iElement){
				if(oElement.id == iElement){
					
					myPhases.push(oElement);
					
				}
			})
				
		})
		
		//if no valid phase was found
		if(myPhases.length < 1){
			
			console.log("Inside invalid array phase inner if");
			myPhases = tempPhaseList;
		}
		
	}
	
	// else if can't understand or find the phases in phase list return all phases
	else{ //TODO: Check in ISO Specs what should be the response if no valid phases are found
		
		myPhases = tempPhaseList;
		console.log("Inside last else");
	}
	
	
	myPhases.forEach(function(element){
		
		activePatterns = activePatterns.concat(element.active);
		
	})
	
	console.log(activePatterns);
	
	return activePatterns;
	
}



//parsePhases(mySchema,["phaseid2"]);
parsePatterns( mySchema,["patternid1", "blah"] );
//validatePatterns(schInstance, mySchema, ["patternid1","patternid2"]);

//myReport = new Report();
//myReport.addError (schInstance, mySchema, "attrib", "This is error message", "This is detailed message");
//myReport.addError (schInstance, mySchema, "attrib2", "This is error message2", "This is detailed message2");
console.log(myReport);








