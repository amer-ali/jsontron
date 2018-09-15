describe("Pattern tests with good data", function() {
  var jsontron = require('../../../lib/jsontron.js');
  var schInstance = require('../../../data/dissertation/pattern/loandata_pattern_good1.json');
  //var schInstance_pattern_bad1 = require('../../../../../data/dissertation/phase/loandata_phase_bad1.json');
  var schRules_pattern = require('../../../data/dissertation/pattern/loandata-rules_dissertation_pattern_good1.json');
  //var myReport;
  //var valid;

  beforeEach(function() {
	  // Reset the report and validity
    //myReport = [];
    //valid = false;
  });

  //good data
  it("should only process a single pattern", function() {
    console.log("Test: Single Pattern through named phase...");
    expect(jsontron.JSONTRON.validate(schInstance, schRules_pattern, ['phaseid1']).valid).toBe(true);

  });
  
    
  it("should only process a single pattern from different phase - phase2", function() {
	  	console.log("Test: Single Pattern from Phase2...");

		//console.log("testing phase 2 :" + jsontron.JSONTRON.validate(schInstance, schRules_pattern, ['phaseid2']).valid );
	    expect(jsontron.JSONTRON.validate(schInstance, schRules_pattern, ['precheck']).valid).toBe(true);

	  });
	 
  
  it("should process multiple patterns through one named phase", function() {
	    console.log("Test: Multiple Patterns in a single phase...");

	    expect(jsontron.JSONTRON.validate(schInstance, schRules_pattern, ['phaseid2']).valid).toBe(true);

	  });
  
  it("should process multiple patterns through multiple named phases", function() {
	    console.log("Test: Multiple Patterns in multiple phases...");

	    expect(jsontron.JSONTRON.validate(schInstance, schRules_pattern, ['phaseid1', 'phaseid2']).valid).toBe(true);

	  });
  
  it("should process all patterns in the document with keyword #ALL", function() {
	  
	  	console.log("Test: All Patterns with Keyword #ALL...");
	    expect(jsontron.JSONTRON.validate(schInstance, schRules_pattern, ['#ALL']).valid).toBe(true);

	  });
  
  it("should process patterns in default phase with keyword #DEFAULT", function() {
	  
	  	console.log("Test: Default Phase with #DEFAULT Keyword...");
	    expect(jsontron.JSONTRON.validate(schInstance, schRules_pattern, ['#DEFAULT']).valid).toBe(true);

	  });
  
  it("should process all patterns in all phases as no phases are mentioned", function() {
	  
	  	console.log("Test: All patterns when no phases are mentioned...");
	    expect(jsontron.JSONTRON.validate(schInstance, schRules_pattern).valid).toBe(true);

	  });
  
  it("should process all patterns in all phases as invalid phase name is mentioned", function() {
	  
	  	console.log("Test: All patterns in all phases when wrong phase is mentioned...");
	    expect(jsontron.JSONTRON.validate(schInstance, schRules_pattern, ['blah']).valid).toBe(true);

	  });
  
  it("should process patterns progressively as mentioned in phases", function() {
	  
	  	console.log("Test: All patterns in all phases when wrong phase is mentioned...");
	    expect(jsontron.JSONTRON.validate(schInstance, schRules_pattern, ['precheck', 'phaseid1','phaseid2']).valid).toBe(true);

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
	  var schInstance_pattern_bad1 = require('../../../data/dissertation/pattern/loandata_pattern_bad1.json');
	  var schRules_pattern = require('../../../data/dissertation/pattern/loandata-rules_dissertation_pattern_good1.json');
	  //var myReport;
	  //var valid;

	  
	  beforeEach(function() {
		  // Reset the report and validity
	    //myReport = [];
	    //valid = false;
	  });

	  
	  it("should only process patterns in single named phase1", function() {
	    console.log("Test: Pattern(s) in Single Named Phase1...");
	    expect(jsontron.JSONTRON.validate(schInstance_pattern_bad1, schRules_pattern, ['precheck']).errors.length).toEqual(0);

	  });
	  
	  
	  it("should only process patterns in another single named phase2", function() {
		  	console.log("Test: Pattern(s) in another single Named Phase2...");

			//console.log("testing phase 2 :" + jsontron.JSONTRON.validate(schInstance_pattern_bad1, schRules_pattern, ['phaseid2']).valid );
		    expect(jsontron.JSONTRON.validate(schInstance_pattern_bad1, schRules_pattern, ['phaseid1']).valid).not.toBe(true);

		  });
		 
	  
	  it("should process multiple patterns from  multiple named phases", function() {
		  
		    console.log("Test: Multiple patterns from Multiple Named Phases...");
		    expect(jsontron.JSONTRON.validate(schInstance_pattern_bad1, schRules_pattern, ['phaseid1', 'phaseid2']).valid).not.toBe(true);

		  });
	  
	  it("should process all patterns in all phases with keyword #ALL", function() {
		  
		  	console.log("Test: All patterns in all Phases with Keyword #ALL...");
		    expect(jsontron.JSONTRON.validate(schInstance_pattern_bad1, schRules_pattern, ['#ALL']).valid).not.toBe(true);

		  });
	  
	  it("should process patterns in default phase with keyword #DEFAULT", function() {
		  
		  	console.log("Test: Patterns in Default Phase with #DEFAULT Keyword...");
		    expect(jsontron.JSONTRON.validate(schInstance_pattern_bad1, schRules_pattern, ['#DEFAULT']).valid).not.toBe(true);

		  });
	  
	  it("should process all patterns in all phases as no phases are mentioned", function() {
		  
		  	console.log("Test: All patterns in all phases when no phases are mentioned...");
		    expect(jsontron.JSONTRON.validate(schInstance_pattern_bad1, schRules_pattern).valid).not.toBe(true);

		  });
	  
	  it("should process all patterns in all phases as invalid phase name is mentioned", function() {
		  
		  	console.log("Test: All patterns in all phases when wrong phase is mentioned...");
		    expect(jsontron.JSONTRON.validate(schInstance_pattern_bad1, schRules_pattern, ['blah']).valid).not.toBe(true);

		  });
	  

	});

