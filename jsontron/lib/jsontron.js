//module.exports = require('../node_modules/jsonpath/lib/index');
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
//var myRule = require("../data/loandata-instance-single-rule.json");
//var myPattern = require("../data/loandata-instance-single-pattern.json");
//var myPatterns = require("../data/loandata-instance-single-schemaWithPatterns.json");
//var mySchema = require("../data/loandata-instance-single-schemaWithPatternsNPhases.json");
//var mySchemaTest1 = require("../data/loandata-instance-single-schematest1.json");
var mySchemaTest2 = require("../data/loandata-instance-single-schematest2.json");

//console.log(schInstance);
//console.log(myRule);


var loanid = jp.query(schInstance, '$.loan_data.loans[0].loan_id');
//var result = eval("loanid > 1 && loanid < 2234567");
//var phases = jp.query(schTRON, '$..phase[1].active');
//var pattern2 = jp.query(schTRON, '$..pattern');

var loanid2 = jp.query(schInstance, '$.loan_data.loans[0].loan_id');
var jumboLoan = jp.query(schInstance, "$.loan_data.loans[?(@.loan_type === 'Jumbo')]");
//var fhaLoanAmount = jp.query(fhaLoan, '$..amount');
var allLoans = jp.query(schInstance, '$.loan_data.loans[0]');
var outerCustID = jp.query(allLoans, '$[?(@.customer_id == @.customer.customer_id)]') != false;
var innerCustID = jp.query(allLoans, '$[0].customer.customer_id');
//var equality = jp.query(allLoans, '$..[?(@.customer_id === @.customer.customer_id)]');
var equality = jp.query(allLoans,'$[0].customer_id[0]') == jp.query(allLoans,'$[0].customer.customer_id[0]');


//console.log("Jumbo Loan");
//console.log (jumboLoan);
//console.log("FHA Loan Amount");
//console.log (fhaLoanAmount);
//console.log ("All loans context node set");
//console.log (allLoans);
//console.log("Outer Customer ID");
//console.log(outerCustID);
//console.log("Inner Customer ID");
//console.log(innerCustID);
//console.log("Equality");
//console.log(equality);
//console.log("LoanID: "+ loanid);
//console.log("LoanID2: "+ loanid2);
//console.log("Result: "+ result);
//console.log(loanid.length);
//console.log(pattern2);

/**
 * Report function will contain an arary of errors, warnings and validations
 * @method addError will be called to add new errors
 * @method addWarnings will be called to add any warnings
 * @method addValidations will be called to add the validations
 * 
 * 
 */
var Report = function(){
	
	
	this.errors = [];
	this.warnings = [];
	this.validations =[];
	this.finalValidationReport =[];
	this.valid = false;
	
	
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

Report.prototype.addValidation = function(rule, context, assertionid, test, msg, result){
	
	this.validations.push({
		schRule : rule,
		ruleContext : context,
		assertionid: assertionid,
		assertionTest : test,
		message : msg,
		assertionValid : result
	});
	
}

Report.prototype.addValidationSchemaNInstance = function(instance, schema){
	
	this.validations.push({
		schInstance : instance,
		schema : schema
		//TODO: Can add the meta values from the schema like schema id, schema version, query language, ISO Version
		//attribute: attr,
		//message : msg,
		//detail : detail
	});
	
}

Report.prototype.setFinalValidationReport = function(errorList, validationList, interimReport ){
	
	//let finalValidationReport = [];
	let validationFailures = [];
	try{
		if (validationList && Array.isArray(validationList)&& validationList.length >0){
			
			validationList.forEach(function(valElement){
				//console.log(valElement.assertionValid);
				if(!valElement.assertionValid){
					
					validationFailures.push(valElement);
					
				}
				
			})
			
		}
		
		interimReport.finalValidationReport = validationFailures.concat(errorList);
		//return finalValidationReport;
		
		//if (finalValidationReport.length < 1){
			
			//console.log("**** THIS INSTANCE IS SEMANTICALLY VALID ****");
			
		//}else{
			//console.log("**** THIS INSTANCE CONTAINS SEMANTIC VALIDATION ISSUES. PLEASE SEE BELOW ****");
			//console.log(finalValidationReport);
		//}
		
	}catch(e){
		console.log(" ERROR IN VALIDATION REPORTING: "+e.message + e.stack);
	}
}



myReport = new Report(); // Report Array will hold all the errors during the processing

/**
var myAssert = {
        "id":"assert id 1",
        "test": "jp.query(context,'$[0][0].loan_id') < 1 && jp.query(context,'$[0][0].loan_id') < 2234567",
        "message": "Assert 1: Loan ID cannot be less than 1 or greater than 2234567"
     };
*/

/**
 * 
 * Parse Assert parses a given assertion and returns an object
 * @param {Assert Object} The assert object from the rule that is to be parsed
 * @return {Object containing id, result and message}
 * 
 */
var parseAssert = function (assert){
	
	//console.log(ruleContext);
	//console.log(jp.query(ruleContext, "$[0].loan_id"));
	try{
		let mytest = assert.test;
		//console.log("MyTest Before: " + mytest);
		//console.log(mytest);
		//mytest = mytest.replace(/context/ig,'parsedContext');
		//mytest = mytest.replace(/contextNode/ig,'cNode');
		//console.log ("MyTest After: "+ mytest);
		
		//let result = eval(jp.query(ruleContext, "$..loan_id") < 1 && jp.query(ruleContext, "$..loan_id") < 2234567);
		var asrtResult = eval(mytest); // TODO: do strict eval for security reasons
		console.log("Evaluated Test");
		console.log("Evaluated Test: "+ asrtResult);
	}catch(e)
	{
		myReport.addError(this, assert, "Assert", "Error in Assert Parsing "+e.message, e.stack);
	}
	
	return {"id":assert.id, "result":asrtResult, "message":assert.message};
	
}

//var ruleCtx = jp.query(schInstance, '$.loan_data.loans[1]');
// var parsedAssert = parseAssert(myAssert);

/**
 * 
 * Validate Assert validates a parsed assertion and returns a message based on the result of the assertion
 * @param {Assert Object} The parsed assert object that was returned from parseAssert 
 * @return {String assertion message}
 * 
 */
var validateAssert = function (parsedAssert){
	try{
		var assrtMsg = parsedAssert.result ? "successful" : parsedAssert.message;
		//console.log ("Test: "+ parsedAssert.result);
		//console.log ("Message: " + assrtMsg);
		}catch(e){
			myReport.addError(this, parsedAssert, "Assert", "Error in Assert Validation "+e.message, e.stack);
			
	}
		return assrtMsg;

}

//validateAssert(parsedAssert);
/**
 * 
 * Parse Rule extracts a list of assertions from a given rule object
 * @param {Rule object}
 * @return [Array of assert objects]
 * 
 */
var parseRule = function(rule){
	
	let asserts = [];
	try{
		asserts = rule.assert;
		if(asserts.length < 1){
			myReport.addWarning(this, rule, "Rule", "Invalid Rule", "Rule doesn't have any assertions defined.");
			}
		}
	catch(e){
		myReport.addError(this, rule, "Rule", "Error in Rule Parsing "+e.message, e.stack);
	}
		return asserts;
}


/**
 * 
 * Validate Rule applies a rule to the given instance
 * @param {JSON Instance object that is to be validated}
 * @param {Rule object}
 * TODO: Keep track of validated rules, so only first rule is fired in a single pattern
 * 
 */
var  validateRule = function(instance, rule){
	
	// first parse the context
	try {
		//parsedContext = jp.query(instance, rule.context);
		ruleParsedContext = jp.query(instance, rule.context);
		console.log("===== Begin Rule ParsedContext=====");
		console.log(ruleParsedContext);
		console.log("===== End Rule ParsedContext=====");
		//console.log(parsedContext);
		//FIXME: Need to check empty array separately, a rule can still be valid if the context didn't return anything
		if(ruleParsedContext && Array.isArray(ruleParsedContext) && ruleParsedContext.length == 0){
			myReport.addWarning(instance, rule, "Rule Context", "Possible issue in Rule Validation: Empty Context NodeSet for rule.", "The context statement didnot return any nodes - Check Rule Context statement");
			return;
		}
		else if(ruleParsedContext && Array.isArray(ruleParsedContext) && ruleParsedContext.length > 0){
			//try{
			ruleParsedContextNodeSet = ruleParsedContext; // all the asserts are in the first element of parsedContext nodeset
			//console.log("===== Begin Rule ParsedContext NodeSet=====");
			//console.log(ruleParsedContextNodeSet);
			//console.log("===== End Rule ParsedContext NodeSet=====");
			if(ruleParsedContextNodeSet && Array.isArray(ruleParsedContextNodeSet) && ruleParsedContextNodeSet.length > 0){
				
				ruleParsedContextNodeSet.forEach(function(nsElement){
					//console.log("Context Node Element");
					//console.log(nsElement);
					contextNode =[];
					contextNode.push(nsElement);
					//console.log("Context Node Element Array");
					//console.log(contextNode);
			
				// get all asserts for the rule
					let asrts = [];
					asrts = parseRule(rule);
					
					//parse and validate all asserts
					if(Array.isArray(asrts) && asrts.length > 0 && asrts[0] !=''){
						asrts.forEach(function(element){
							
							//console.log(element);
							try{
								let parAssert = parseAssert(element);
								let valAssert = validateAssert(parAssert);
								myReport.addValidation(rule, contextNode, parAssert.id, element.test, valAssert,parAssert.result);
								}catch(e){
									myReport.addError(instance, rule, "Rule", "Error in Rule Validation "+e.message, e.stack);
									}
						})
				
					}
					else{
						myReport.addError(instance, rule, "Rule Context", "Error in Rule Validation: Invalid Context "+e.message, e.stack);
					}
				})
		
			}else{myReport.addError(instance, rule, "Rule Context", "Error in Rule Validation: Invalid Context Node ", "The context node set doesn't contain valid node - Check Rule Context");}
		}else{
			myReport.addError(instance, rule, "Rule Context", "Error in Rule Validation: Invalid Context NodeSet", "The context node set is not valid - Check Rule Context statement");
	}
	}catch(e){
		myReport.addError(instance, rule, "Rule", "Error in Rule Validation "+e.message, e.stack);
	}
}

//console.log ("Starting to process the Patterns......");
//console.log ("======================================");

/**
 * 
 * Parse Pattern extracts a list of rules from a given pattern object
 * @param {pattern object}
 * @return [Array of Rules objects]
 * 
 */
var parsePattern = function(spattern){
	//console.log(spattern);
	let myRuleList = [];
	try {
	myRuleList = spattern.rule;
	if(myRuleList.length < 1){
		myReport.addWarning(this, spattern, "Pattern", "Invalid pattern", "Pattern doesn't have any rules defined.");
		}
	}catch(e){
		myReport.addError(this, spattern, "Pattern", "Error in Pattern Parsing "+e.message, e.stack);
	}
	return myRuleList;
	
}

//parsePattern(myPattern);
//console.log ("======================================");
//console.log ("End of processing the Patterns......");
//console.log ("======================================");

//console.log(myPattern);

//validateRule(schInstance, myRule);

var  validatePattern = function(pInstance, pattern){
	
	let rls = [];
	try{
	rls = parsePattern(pattern);
	//console.log("Below are the rules: ")
	//console.log(rls);
	//console.log("Rules have been parsed. ")
	
	//parse and validate all asserts
	rls.forEach(function(element){
		try{ //if one or more rules have issues, it should still validate the remaining ones
		//console.log(element);
		//let parRle = parsePattern(element);
		//console.log("Reading the rule:");
		//console.log(element);
		//console.log("Rule reading done.");
		//console.log(element.context);
		//console.log("The above is context");
		validateRule(pInstance, element);
		}catch(e){
			myReport.addError(psInstance, element, "Pattern:Rules", "Issue validating rule inside pattern "+e.message, e.stack);
		}
			})
	}catch(e){
		myReport.addError(psInstance, pattern, "Pattern", "Pattern Validation Error "+e.message, e.stack);
	}
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
		
		//console.log("Invalid Schema : Need atleast 1 Pattern...");
		//console.log(typeof tempPatterns);
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
		//console.log("Patterns Requested: "+patternsList);
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
	
	//console.log(patterns);
	return patterns;
	
}

//parsePatterns(myPatterns);
/**
 * 
 * Validate Patterns takes a list of pattern objects and validates
 * @param {JSON instance that needs to be validated
 * @param {Schematron Schema} This is the Schematron Rules Schema file
 * @param [Pattern Object Array] This parameter takes an array of pattern object that will be validated
 * 
 */

var validatePatterns = function(psInstance, psSchema, patternsList){
	
	var psPatterns = [];
	try{
	psPatterns = parsePatterns(psSchema, patternsList);
	if(psPatterns && Array.isArray(patternsList) && psPatterns.length > 0 && psPatterns[0] != ''){
		psPatterns.forEach(function(element){
			try{
			//console.log("Validating the pattern....");
			//console.log(element);
			validatePattern(psInstance, element);
			//console.log("Validated the pattern.");
			}catch(e){
				myReport.addError(psInstance, psSchema, "Pattern", "Pattern Validation Error: "+ e.message, e.stack);
			}
	})
	
	} else {
		myReport.addError(psInstance, psSchema, "Pattern", "Pattern Validation Error-No Pattern was validated.", "Pattern Validation error");
	}
	
	}catch (e){
		myReport.addError(psInstance, psSchema, "Pattern", "Validation Error: "+ e.message, e.stack);
	}
	
}

//validatePatterns(schInstance, myPatterns);

/**
 * 
 * parsePhases takes Schematron JSON schema and option phaseList argument and returns list of active pattern ids
 * @param {Schematron JSON Schema } This is the Schematron Rules Schema file
 * @param [Array of phase ids] Optional phase ids list
 * @return [Array of active patterns] Returns a consolidated list of active patterns
 * @ISO:Phase - #ALL is keyword that indicates all phases are active.
 * @ISO:Phase - #DEFAULT is also a keyword that indicates that phase id mentioned in 'defaultPhase' property of schema is active
 * @ISO:Phase - If no/invalid id is provided, all phases are active
 * @ISO:Phase - if no phase is defined in schema (as it is optional), all patterns are active
 * 
 */

//console.log("Parsing the phase.....");
var parsePhases = function(phSchema, phaseList){
	//console.log(phaseList);
	//console.log(typeof phaseList);
	let activePatterns = []; //this will hold all the active patterns that will be return for processing
	let allPatterns = []; // this is the list of all patterns in the schema
	let myPhases = []; // this will hold the active phases if defined/provided
	let tempPhaseList = []; //this is temp list of all the phases defined in the schema
	
	allPatterns = phSchema.schema.pattern;
	if(!allPatterns){
		
		myReport.addError(this, phSchema, "Phase", "Parsing Error: No Pattern Found", "Schema should contain atleast one valid pattern");
		return;
		
	}
	 
	tempPhaseList = phSchema.schema.phase;
	
	//if schema doesn't have any phases defined, then all patterns are active
	if(!tempPhaseList){
		
		//let allPatterns = phSchema.schema.pattern;
		try{
			allPatterns.forEach(function(element){
			activePatterns.push(element.id);
			
			myReport.addWarning(this, phSchema, "Phase", "Parsing Warning. No phase found ","This schema doesn't have any phase defined . All Patterns will be processed.");

		})
	}catch(e){
		myReport.addError(this, phSchema, "Phase", "Parsing Error: "+e.message, e.stack);
	}
		
	}

	else if (typeof phaseList == 'undefined'){
		//no phase is mentioned while invoking so process all phases
		myPhases = tempPhaseList;
		myReport.addWarning(this, phSchema, "Phase", "Parsing Warning. No phase was provided. ","No phase list was provided. All Patterns will be processed.");
		//console.log("Inside Undefined if");
	}
	
	//else if(typeof phaseList == 'string' && phaseList.toUpperCase() =='ALL'){
	else if(Array.isArray(phaseList) && phaseList.includes('#ALL')){
		
		myPhases = tempPhaseList;
		//console.log("Inside ALL if");
	
		}
	
	//else if (typeof phaseList == 'string' && phaseList.toUpperCase() =='DEFAULT'){
	else if (Array.isArray(phaseList) && phaseList.includes('#DEFAULT')){
		
		//console.log("Inside DEFAULT if");
		let dPhase = phSchema.schema.defaultPhase;
		//console.log(dPhase);
			if (!dPhase){ // If the defaultPhase is not defined or is empty, then all phases are active
				myPhases = tempPhaseList;
				myReport.addWarning(this, phSchema, "Phase", "Parsing Error: No Default Phase Found ", "No Default phase was found in the schema. All phases will be processed");
				
			}
			else{
				try{
				tempPhaseList.forEach(function(element){
				
					if(element.id == dPhase){
					
						myPhases.push(element);
				}
			
		});
			//if defaultPhase cannot be found in phaseList
			if(myPhases.length < 1){
				
				//console.log("Inside invalid defaultPhase inner if");
				myPhases = tempPhaseList;
				myReport.addWarning(this, phSchema, "Phase", "Parsing Error: No Default Phase Found ", "No Default phase was found in the schema. All phases will be processed");
			}
			
				}catch(e){
					myReport.addError(this, phSchema, "Phase", "Parsing Error: "+e.message, e.stack);
				}
			}
	}
	
	else if (Array.isArray(phaseList) && phaseList.length > 0){
		
		//console.log("Inside Array if");
		try{
			tempPhaseList.forEach(function(oElement){
				
				phaseList.forEach(function(iElement){
					if(oElement.id == iElement){
						
						myPhases.push(oElement);
					
				}
			})
				
		})
			try{
				if(phaseList.length > myPhases.length){
					myReport.addWarning(this, phSchema, "Phase", "Parsing Error: Invalid Phases detected. ", "Phase (s) Provided: "+ phaseList +" Phases Processed: " + myPhases );
				}
			
			}catch (e){
				myReport.addWarning(this, phSchema, "Phase", "Parsing Error: "+e.message, e.stack );
			}
		
		//if no valid phase was found
		if(myPhases.length < 1){
			
			//console.log("Inside invalid array phase inner if");
			myPhases = tempPhaseList;
			myReport.addWarning(this, phSchema, "Phase", "Parsing Error: No Valid Phase Specified ", "Phase list doesnt have any valid phases. All phases will be processed");
		}
		}catch(e){
			myReport.addError(this, phSchema, "Phase", "Parsing Error: "+e.message, e.stack);
		}
	}
	
	// else if can't understand or find the phases in phase list return all phases
	else{ //TODO: Check in ISO Specs what should be the response if no valid phases are found
		
		myPhases = tempPhaseList;
		//console.log("Inside last else");
	}
	
	try{
		myPhases.forEach(function(element){
			
			activePatterns = activePatterns.concat(element.active);
			
		})
	}catch(e){
		myReport.addError(this, phSchema, "Phase", "Parsing Error: "+e.message, e.stack);
	}
	
	//console.log(activePatterns);
	
	return activePatterns;
	
}



//parsePhases(mySchema,["phaseid2", "phaseid1"]);
//parsePatterns( mySchema,["patternid1", "blah"] );
//validatePatterns(schInstance, mySchema, ["patternid1","patternid2"]);
JSONTRON = {
		validate : function (schInstance, schRules, activePhaseList){
			
			myReport = new Report();
			myActivePhases = parsePhases(schRules, activePhaseList);
			validatePatterns(schInstance, schRules, myActivePhases);
			//console.log(myReport);
			//myReport.valid = true;
			//console.log(myReport);
			
			//myReport.finalValidationList = validationFailures.concat(errorList);
			//return finalValidationReport;
			
			myReport.setFinalValidationReport (myReport.errors, myReport.validations, myReport);
			
			if (myReport.finalValidationReport.length < 1){
				
				myReport.valid = true;
				console.log("**** THIS INSTANCE IS SEMANTICALLY VALID ****");
				
			}else{
				myReport.valid = false;
				console.log("**** THIS INSTANCE CONTAINS SEMANTIC VALIDATION ISSUES. PLEASE SEE FULL REPORT BY ENABLING DEBUG WITH -d OPTION ****");
				//console.log(myReport.finalValidationReport);
			}
			
			//console.log(myReport);
			return myReport;
		
			//myReport.finalValidationReport (myReport.errors, myReport.validations);
			//console.log (str1 + " "+str2);
		}
}
//validatePatterns(schInstance, mySchemaTest2, parsePhases(mySchemaTest2, ["phaseid1","phaseid2"]));
//validatePatterns(schInstance, mySchemaTest1, ["patternid1"]);


//myReport = new Report();
//myReport.addError (schInstance, mySchema, "attrib", "This is error message", "This is detailed message");
//myReport.addError (schInstance, mySchema, "attrib2", "This is error message2", "This is detailed message2");


//console.log(myReport);

//myReport.finalValidationReport (myReport.errors, myReport.validations);
this.JSONTRON = JSONTRON;
exports.JSONTRON = JSONTRON;
//exports.module = this;

//Command Line processing






