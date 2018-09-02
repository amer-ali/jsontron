describe("Rules tests with good data", function() {
  var jsontron = require('../../../lib/jsontron.js');
  var schInstance = require('../../../data/dissertation/rules/loandata_dataForRules_good1.json');
  var schRules_doc = require('../../../data/dissertation/rules/loandata-rules_dissertation_rules_good1.json');
  //var myReport;
  //var valid;

  beforeEach(function() {
	  // Reset the report and validity
    //myReport = [];
    //valid = false;
  });

  //good data
  it("should only process  single rules in a single pattern", function() {
    console.log("Test: Single Pattern through named phase...");
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['precheck']).valid).toBe(true);

  });
  
    
  it("should only process a single pattern from different phase - phase1", function() {
	  	console.log("Test: Single Pattern from Phase1...");

		//console.log("testing phase 2 :" + jsontron.JSONTRON.validate(schInstance, schRules_doc, ['phaseid2']).valid );
	    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['phaseid1']).valid).toBe(true);

	  });
	 
  
  it("should process multiple rules from a single pattern through one named phase", function() {
	    console.log("Test: Multiple rules from a single  Pattern in a single phase...");

	    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['phaseid2']).valid).toBe(true);

	  });
  
  it("should process multiple rules from multiple patterns through multiple named phases", function() {
	    console.log("Test: Multiple rules from multiple Patterns in multiple phases...");

	    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['phaseid1', 'phaseid2']).valid).toBe(true);

	  });
  
  
});


//*******************************************************************************************
// 						***** TESTS BELOW WILL USE THE BAD DATA *****
//						***** loan amount in all loans are increased***
//						***** above *****
//*******************************************************************************************


describe("Rules Tests with bad data", function() {
	  var jsontron = require('../../../lib/jsontron.js');
	  //var schInstance = require('../../../../../data/dissertation/loandata.json');
	  var schInstance_dataForRules_bad1 = require('../../../data/dissertation/rules/loandata_dataForRules_bad1.json');
	  var schRules_doc = require('../../../data/dissertation/rules/loandata-rules_dissertation_rules_good1.json');
	  //var myReport;
	  //var valid;

	  
	  beforeEach(function() {
		  // Reset the report and validity
	    //myReport = [];
	    //valid = false;
	  });

	  
	  it("should only process single rule in a single  patterns in single named phase", function() {
	    console.log("Test: Pattern(s) in Single Named phase...");
	    expect(jsontron.JSONTRON.validate(schInstance_dataForRules_bad1, schRules_doc, ['precheck']).errors.length).toEqual(0);

	  });
	  
	  
	  it("should only process single rule in a single pattern in another single named phase1", function() {
		  	console.log("Test: Single Rule in single Pattern in another single Named Phase1...");

			//console.log("testing phase 2 :" + jsontron.JSONTRON.validate(schInstance_dataForRules_bad1, schRules_doc, ['phaseid2']).valid );
		    expect(jsontron.JSONTRON.validate(schInstance_dataForRules_bad1, schRules_doc, ['phaseid1']).valid).not.toBe(true);

		  });
		 
	  
	  it("should process multiple rules from multiple patterns from  multiple named phases", function() {
		  
		    console.log("Test: Multiple rules from multiple patterns from Multiple Named Phases...");
		    expect(jsontron.JSONTRON.validate(schInstance_dataForRules_bad1, schRules_doc, ['phaseid1', 'phaseid2']).valid).not.toBe(true);

		  });
	  

	});


describe("Rules Tests with bad data where rule is invalid or missing", function() {
	  var jsontron = require('../../../lib/jsontron.js');
	  //var schInstance = require('../../../../../data/dissertation/loandata.json');
	  var schInstance_dataForRules_bad1 = require('../../../data/dissertation/rules/loandata_dataForRules_good1.json');
	  var schRules_doc = require('../../../data/dissertation/rules/loandata-rules_dissertation_rules_bad1.json');
	  //var myReport;
	  //var valid;

	  
	  beforeEach(function() {
		  // Reset the report and validity
	    //myReport = [];
	    //valid = false;
	  });

	  
	  it("should gracefully handle missing  or invalid rule", function() {
	    console.log("Test: Pattern(s) in Single Named phase...");
	    expect(jsontron.JSONTRON.validate(schInstance_dataForRules_bad1, schRules_doc, ['phaseid1']).errors.length).toEqual(2);

	  });
	  
	  it("should gracefully handle a pattern with bad rule and a pattern with good rule.", function() {
		    console.log("Test: Pattern(s) in Single Named phase...");
		    expect(jsontron.JSONTRON.validate(schInstance_dataForRules_bad1, schRules_doc, ['precheck', 'phaseid1']).errors.length).toEqual(2);

		  });
	  
});
