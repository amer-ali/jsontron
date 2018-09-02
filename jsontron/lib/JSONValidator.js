
try {
var jsontron = require('./jsontron.js');

//var Jasmine = require("jasmine");
 var argv = require("minimist")(process.argv.slice(2));
console.dir(argv);

var schInstance;
var mySchRules;

schInstance = require(argv.i);
mySchRules = require(argv.r);
var phaseLists = argv._;
myRpt = jsontron.JSONTRON.validate(schInstance, mySchRules, phaseLists);
//console.log(myRpt);


if (argv.d){ // if debug is enabled
	//console.log("Total Validations: " + myRpt.validations.length);
	//console.log("Total Errors Found: " + myRpt.errors.length);
	//console.log("Total Warnings Found: " + myRpt.warnings.length);
	//if (myRpt.finalValidationReport.length > 0){
		
		//console.log("Validation Issues found: ");
		//console.log(myRpt.finalValidationReport);
	//}
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



 