describe("Simple Example tests with good data", function() {
  var jsontron = require('../../../lib/jsontron.js');
  var schInstance = require('../../../data/dissertation/loandata-simple/loandata_dataForSimpleExample_good1.json');
  var schRules_doc = require('../../../data/dissertation/loandata-simple/loandata-rules_dissertation_simple_good1.json');
  //var myReport;
  //var valid;

  beforeEach(function() {
	  // Reset the report and validity
    //myReport = [];
    //valid = false;
  });

  //good data
  it("should only process rules in a single pattern", function() {
    console.log("Test: Single Pattern through named phase...");
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['phaseid1']).valid).toBe(true);

  });
  
    
  it("should only process a single pattern from different phase - phase2", function() {
	  	console.log("Test: Single Pattern from Phase2...");

		//console.log("testing phase 2 :" + jsontron.JSONTRON.validate(schInstance, schRules_doc, ['phaseid2']).valid );
	    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['precheck']).valid).toBe(true);

	  });
	 
  
  it("should process multiple patterns through one named phase", function() {
	    console.log("Test: Multiple Patterns in a single phase...");

	    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['phaseid2']).valid).toBe(true);

	  });
  
  it("should process multiple patterns through multiple named phases", function() {
	    console.log("Test: Multiple Patterns in multiple phases...");

	    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['phaseid1', 'phaseid2']).valid).toBe(true);

	  });
  
  it("should process all patterns in the document with keyword #ALL", function() {
	  
	  	console.log("Test: All Patterns with Keyword #ALL...");
	    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['#ALL']).valid).toBe(true);

	  });
  
  it("should process patterns in default phase with keyword #DEFAULT", function() {
	  
	  	console.log("Test: Default Phase with #DEFAULT Keyword...");
	    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['#DEFAULT']).valid).toBe(true);

	  });
  
  it("should process all patterns in all phases as no phases are mentioned", function() {
	  
	  	console.log("Test: All patterns when no phases are mentioned...");
	    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc).valid).toBe(true);

	  });
  
  it("should process all patterns in all phases as invalid phase name is mentioned", function() {
	  
	  	console.log("Test: All patterns in all phases when wrong phase is mentioned...");
	    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['blah']).valid).toBe(true);

	  });
  
  it("should process patterns progressively as mentioned in phases", function() {
	  
	  	console.log("Test: All patterns in all phases when wrong phase is mentioned...");
	    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['precheck', 'phaseid1','phaseid2']).valid).toBe(true);

	  });
  
});


//*******************************************************************************************
// 						***** TESTS BELOW WILL USE THE BAD DATA *****
//						***** loan amount in all loans are increased***
//						***** above *****
//*******************************************************************************************


describe("Pattern Tests with bad data", function() {
	  var jsontron = require('../../../lib/jsontron.js');
	  //var schInstance = require('../../../../../data/dissertation/loandata.json');
	  var schInstance_dataForSimple_bad1 = require('../../../data/dissertation/loandata-simple/loandata_dataForSimpleExample_bad1.json');
	  var schRules_doc = require('../../../data/dissertation/loandata-simple/loandata-rules_dissertation_simple_good1.json');
	  //var myReport;
	  //var valid;

	  
	  beforeEach(function() {
		  // Reset the report and validity
	    //myReport = [];
	    //valid = false;
	  });

	  
	  it("should only process patterns in single named phase1", function() {
	    console.log("Test: Pattern(s) in Single Named Phase1...");
	    expect(jsontron.JSONTRON.validate(schInstance_dataForSimple_bad1, schRules_doc, ['precheck']).errors.length).toEqual(0);

	  });
	  
	  
	  it("should only process patterns in another single named phase2", function() {
		  	console.log("Test: Pattern(s) in another single Named Phase2...");

			//console.log("testing phase 2 :" + jsontron.JSONTRON.validate(schInstance_dataForSimple_bad1, schRules_doc, ['phaseid2']).valid );
		    expect(jsontron.JSONTRON.validate(schInstance_dataForSimple_bad1, schRules_doc, ['phaseid1']).valid).not.toBe(true);

		  });
		 
	  
	  it("should process multiple patterns from  multiple named phases", function() {
		  
		    console.log("Test: Multiple patterns from Multiple Named Phases...");
		    expect(jsontron.JSONTRON.validate(schInstance_dataForSimple_bad1, schRules_doc, ['phaseid1', 'phaseid2']).valid).not.toBe(true);

		  });
	  
	  it("should process all patterns in all phases with keyword #ALL", function() {
		  
		  	console.log("Test: All patterns in all Phases with Keyword #ALL...");
		    expect(jsontron.JSONTRON.validate(schInstance_dataForSimple_bad1, schRules_doc, ['#ALL']).valid).not.toBe(true);

		  });
	  
	  it("should process patterns in default phase with keyword #DEFAULT", function() {
		  
		  	console.log("Test: Patterns in Default Phase with #DEFAULT Keyword...");
		    expect(jsontron.JSONTRON.validate(schInstance_dataForSimple_bad1, schRules_doc, ['#DEFAULT']).valid).not.toBe(true);

		  });
	  
	  it("should process all patterns in all phases as no phases are mentioned", function() {
		  
		  	console.log("Test: All patterns in all phases when no phases are mentioned...");
		    expect(jsontron.JSONTRON.validate(schInstance_dataForSimple_bad1, schRules_doc).valid).not.toBe(true);

		  });
	  
	  it("should process all patterns in all phases as invalid phase name is mentioned", function() {
		  
		  	console.log("Test: All patterns in all phases when wrong phase is mentioned...");
		    expect(jsontron.JSONTRON.validate(schInstance_dataForSimple_bad1, schRules_doc, ['blah']).valid).not.toBe(true);

		  });
	  

	});

