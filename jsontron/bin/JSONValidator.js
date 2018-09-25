/**
 * This module is called from command line
 * SYNTAX:  $node JSONValidator -i instancefile -r rulesfile [-d ] [#DEFAULT | #ALL | phase list]')
 * where
 * -i is json document that needs to be validated
 * - r is the rules file that needs to be applied 
 * -d is optional and will turn on debug
 * #DEFAULT is keyword to activate default phase
 * #ALL is keyword to activiate all phases
 * phase list is space separated list of phases that you wan to activate
 */

try {
var jsontron = require('../lib/jsontron.js');

//var Jasmine = require("jasmine");
 var argv = require("minimist")(process.argv.slice(2));
//console.dir(argv);

var schInstance;
var mySchRules;

schInstance = require(argv.i);
mySchRules = require(argv.r);
var phaseLists = argv._;
console.log("Starting Semantic Validation .........");
myRpt = jsontron.JSONTRON.validate(schInstance, mySchRules, phaseLists);
console.log("Completed Semantic Validation .........");
//console.log(myRpt);


if (argv.d){ // if debug is enabled

	console.log("Total Errors Found: " + myRpt.errors.length);
	console.log("Total Warnings Found: " + myRpt.warnings.length);
	console.log("Total Validations: " + myRpt.validations.length);
	console.log("Total Failded Assertions: " + myRpt.finalValidationReport.length);
	console.log("Full Validation Report : ");
	console.log(myRpt);
	
}

}

catch (e){
	console.log("Oops there is an error processing your validation request... ");
	console.log('SYNTAX:  $node JSONValidator -i instancefile -r rulesfile [-d ] [#DEFAULT | #ALL | phase list]');
	console.log ("Error Message is : " + e.message );
	console.log ("Error Stack is : " + e.stack);
	 
}



 