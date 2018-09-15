
//*******************************************************************************************
//	***** TESTS BELOW WILL USE THE BAD LOAN DATA *****

//*******************************************************************************************


describe("Report tests with bad loan data for FHA use case", function() {
	  var jsontron = require('../../../lib/jsontron.js');
	  var schInstance = require('../../../data/dissertation/report/loandata_dataForReport_bad1.json');
	  var schRules_doc = require('../../../data/dissertation/report/loandata-rules_dissertation_report_good1.json');
	  
//bad data. It should process all patterns when no phase is mentioned
//it should process all three phases that contain total of 4 patterns. 
// pattern 1 has 1 assertion. pattern 2 has 2 assertions. pattern 3 has 2 loans with two assertions
	  
it("should process all phases, all patterns, all loans when no phase mentioned with FHA Loan with 0 mip", function() {
	
	// changed data for precheck pattern rule 1, assert 1 . The rule is that FHA can't have 0 mip_rate
   // Loan item is set to have 0 mip_rate
  //console.log("Test: all phases with empty phase...");
  expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['precheck']).valid).toBe(false);
  
});

it("should process only precheck pattern. Should have 1 validation", function() {
	
  //should have have 4 assertion validated. 2 loan items * 2 patterns (with 1 rule with 1 assertion each)
	expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['precheck']).validations.length).toEqual(1)	
});

it("should process all phases, all patterns, all loans when no phase mentioned. Should have 0 validtion errors", function() {
	
  //should not have any failed assertions
  expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['precheck']).finalValidationReport.length).toEqual(1);
});

it("should process all phases, all patterns, all loans when no phase mentioned. Should have 0 sys errors", function() {
	
  //should not have any system errors
  expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['precheck']).errors.length).toEqual(0);
});

it("should process all phases, all patterns, all loans when no phase mentioned. Should have 0 warnings", function() {
	
    //should not have any warnings
	expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['precheck']).warnings.length).toEqual(0);

});
});

//*******************************************************************************************
// 						***** TESTS BELOW WILL USE BAD LOAN DATA *****

//*******************************************************************************************

describe("Report tests with bad loan data for Traditional use case", function() {
	  var jsontron = require('../../../lib/jsontron.js');
	  var schInstance = require('../../../data/dissertation/report/loandata_dataForReport_bad1.json');
	  var schRules_doc = require('../../../data/dissertation/report/loandata-rules_dissertation_report_good1.json');
	  
//bad data. The loan amount of Traditional loan has been reduced to 30K so the second assertion should fail 
//pattern 1 has 1 assertion. pattern 2 has 2 assertions. pattern 3 has 2 loans with two assertions
// we will be testing pattern 2 (Traditional) with 2 assertions
	  
it("should process traditional pattern with two assertions", function() {
	
	// changed data for traditional pattern rule 1, 2 asserts 1 . The rule is that traditional loan has to be between 100K and 1MM
	// Loan item is set to 30K instead of 300K
	//console.log("Test: all phases with empty phase...");
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['traditional']).valid).toBe(false);

});

it("should process only trasitonal pattern. Should have 2 validations", function() {
	
//should have have 2 assertion validated.
	expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['traditional']).validations.length).toEqual(2)	
});

it("should process only trasitonal pattern. Should have 1 validtion error", function() {
	
//should have one failed assertions
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['traditional']).finalValidationReport.length).toEqual(1);
});

it("should process only trasitonal pattern. Should have 0 sys errors", function() {
	
//should not have any system errors
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['traditional']).errors.length).toEqual(0);
});

it("should process only trasitonal pattern. Should have 0 warnings", function() {
	
  //should not have any warnings
	expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['traditional']).warnings.length).toEqual(0);

});
});


//*******************************************************************************************
//	***** TESTS BELOW WILL USE BAD LOAN DATA FOR JUMBO LOAN *****

//*******************************************************************************************

describe("Report tests with bad loan data for Jumbo use case", function() {
var jsontron = require('../../../lib/jsontron.js');
var schInstance = require('../../../data/dissertation/report/loandata_dataForReport_bad1.json');
var schRules_doc = require('../../../data/dissertation/report/loandata-rules_dissertation_report_good1.json');

//bad data. The loan amount of first jumbo loan has been increased to 50MM so the first assertion should fail 
//pattern 1 has 1 assertion. pattern 2 has 1 assertions
//we will be testing pattern3 (jumbo) with two patterns and 1 assertion each

it("should process jumbo pattern with two patterns, two rules ", function() {

// changed data for first jumbo loan pattern rule 1, 1 assert . The rule is that jumbo loan has to be between 100K and 1MM
// Loan item is set to 50MM instead of 300K
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['jumbo']).valid).toBe(false);

});

it("should process only jumbo pattern. Should have 4 validations", function() {

//should have have 4 assertion validated. 2 loan items * 2 patterns (with 1 rule with 1 assertion each)
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['jumbo']).validations.length).toEqual(4)	
});

it("should process only jumbo pattern. Should have 1 validtion error", function() {

//should have only 1 failed assertion
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['jumbo']).finalValidationReport.length).toEqual(1);
});

it("should process only jumbo pattern. Should have 0 sys errors", function() {

//should not have any system errors
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['jumbo']).errors.length).toEqual(0);
});

it("should process only trasitonal pattern. Should have 0 warnings", function() {

//should not have any warnings
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['jumbo']).warnings.length).toEqual(0);

});
});


//*******************************************************************************************
//***** TESTS BELOW WILL USE GOOD LOAN DATA TO DEMO WARNINGS *****
// **** Warnings are thrown when there is invalid options passed or some missing information
//***** The validation doesn't stop, it will proceed with default options
// **** For example if you provide an invalid phase, it will process all phases
// **** Or there is an invalid pattern mentioned in the phase
//*******************************************************************************************

describe("Report tests with bad loan data for Jumbo use case", function() {
var jsontron = require('../../../lib/jsontron.js');
var schInstance = require('../../../data/dissertation/report/loandata_dataForReport_good1.json');
var schRules_doc = require('../../../data/dissertation/report/loandata-rules_dissertation_report_good1.json');

//bad data. The loan amount of first jumbo loan has been increased to 50MM so the first assertion should fail 
//pattern 1 has 1 assertion. pattern 2 has 1 assertions
//we will be testing pattern3 (jumbo) with two patterns and 1 assertion each

it("should process jumbo pattern with two patterns, two rules ", function() {

//good data. Should be true

expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['jumbo']).valid).toBe(true);


});

it("should ideally process only jumbo pattern. Should have 4 validations", function() {

//should have have 4 assertion validated. 2 loan items * 2 patterns (with 1 rule with 1 assertion each)
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['jumbo']).validations.length).toEqual(4)

// now if the jumbo phase name is misspelled (jubo) it will process all phase with total 7 phases instead of 4 only
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['jubo']).validations.length).toEqual(7)

});


it("should process jumbo /all patterns. Should have no validtion error", function() {

//should have no failed assertion
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['jumbo']).finalValidationReport.length).toEqual(0);

// with misspelled jumbo (jubo), it should still pass and have no validation failures
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['juuubo']).finalValidationReport.length).toEqual(0);

});

it("should process jumbo // all patterns. Both should have 0 sys errors", function() {

//should not have any system errors
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['jumbo']).errors.length).toEqual(0);

// although phase name is misspelled, it should just ignore the phase name process all phases.
// specifying wrong phase is not an error, it does optmistic processing and processes all phases/patterns
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['jmmbo']).errors.length).toEqual(0);


});

it("should process jumbo/all pattern. Should have 0 / 2 warnings", function() {

//should not have any warnings when no issues
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['jumbo']).warnings.length).toEqual(0);

//although it is not an error to specify a wrong phase, it will still throw a warning that there was a non fatal issue found
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['jlmbo']).warnings.length).toEqual(2);

});
});


//*******************************************************************************************
//***** TESTS BELOW WILL USE GOOD LOAN DATA TO DEMO SYSTEM ERRORS and WARNINGS *****
//**** System Errors are thrown when the rules file contains syntax errors
//***** The validation doesn't stop, it will proceed with next valid rules
//**** For example if there is syntax error in context or assert test statements, it ignore those faulty assertions and move on to valid ones
//**** It will note down the error in the errors list of the report
//*******************************************************************************************

describe("Report tests with bad loan data for all phases use case", function() {
var jsontron = require('../../../lib/jsontron.js');
var schInstanceGood = require('../../../data/dissertation/report/loandata_dataForReport_good1.json');
var schInstance = require('../../../data/dissertation/report/loandata_dataForReport_bad2.json');
var schRules_doc = require('../../../data/dissertation/report/loandata-rules_dissertation_report_bad1.json');
var schRules_docGood = require('../../../data/dissertation/report/loandata-rules_dissertation_report_good1.json');


//bad data. The loan amount of first jumbo loan has been increased to 50MM so the first assertion should fail 
//pattern 1 has 1 assertion. pattern 2 has 1 assertions
//we will be testing pattern3 (jumbo) with two patterns and 1 assertion each

it("should try to process precheck phase ", function() {

//good data but rule file has misspelled 'rules' key instead of 'rule' for precheck pattern.
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['precheck']).valid).toBe(false);

// there is only one assertion and that should fail
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['precheck']).validations.length).toEqual(0);

//there should be some system error because the rule item was misspeled for pre check pattern
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['precheck']).errors.length).toBeGreaterThan(0);

});

it("should traditional pattern with one misspelled 'contextNodes' instead of 'contextNode' for test query for assert 1", function() {

// it has two assertions, 1 assertion should fail because of misspelled 'contextNode' keyword
// other assertion should still pass
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['traditional']).valid).toBe(false);

//should have have 4 assertion validated. 2 loan items * 2 patterns (with 1 rule with 1 assertion each)
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['traditional']).validations.length).toEqual(2);

//now if the jumbo phase name is misspelled (jubo) it will process all phase with total 7 phases instead of 4 only
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['traditional']).errors.length).toBeGreaterThan(0);

});


it("should process jumbo patterns with one misspelled 'rule' item in pattern min", function() {

	expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['jumbo']).valid).toBe(false);

	//should have have 4 assertion validated. 2 loan items * 2 patterns (with 1 rule with 1 assertion each)
	expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['jumbo']).validations.length).toEqual(2);

	//now if the jumbo phase name is misspelled (jubo) it will process all phase with total 7 phases instead of 4 only
	expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['jumbo']).errors.length).toBeGreaterThan(0);

});

it("should process ALL patterns despite problems with patterns, rules and assertions", function() {

	//putting it all together. Despite invalid phase (blah),  misspelled rule keyword in precheck, misspelled contextNode in 1st assertion in tradtional and misspelled rule keyword in first rule of jumbo patterns
	// it will still try to validate whatever it can.
	expect(jsontron.JSONTRON.validate(schInstance, schRules_doc,['precheck','traditional','jumbo','blah']).valid).toBe(false);

	//should have some failed validations
	expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['precheck','traditional','jumbo','blah']).finalValidationReport.length).toBeGreaterThan(0);

	//should have some errors
	expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['precheck','traditional','jumbo','blah']).errors.length).toBeGreaterThan(0);
	
	//should have some warnings
	expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['precheck','traditional','jumbo','blah']).warnings.length).toBeGreaterThan(0);
	
	//But despite errors, warnings and failed validations, it should still have some passed validations
	expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['precheck','traditional','jumbo','blah']).validations.length).toBeGreaterThan(0)

});

});