describe("Phase tests with good data", function() {
  var jsontron = require('../../../lib/jsontron.js');
  var schInstancePhase //= require('../../../../../data/dissertation/phase/loandata_phase_good1.json');
  //var schInstance_phase_bad1 = require('../../../../../data/dissertation/phase/loandata_phase_bad1.json');
  var schRules_multiplePhases// = require('../../../../../data/dissertation/phase/loandata-rules_dissertation_multiplePhases_good1.json');
  var myReport;
  //var valid;

  beforeEach(function() {
	  // Reset the report and validity
    //myReport = new Report();
   console.log("Before Each. Report is: "+ myReport );
  });
  
  afterEach(function() {
	  // Reset the report and validity
    //myReport = jsontron.myReport;
    console.log("After Each. Report is: "+ myReport );
    console.log("After Each. Report is: "+ myReport.valid );
  });
  

  //good data
  
  beforeAll(function (){
	 
	   schInstancePhase = require('../../../data/dissertation/phase/loandata_phase_good1.json');
	  //var schInstance_phase_bad1 = require('../../../../../data/dissertation/phase/loandata_phase_bad1.json');
	   schRules_multiplePhases = require('../../../data/dissertation/phase/loandata-rules_dissertation_multiplePhases_good1.json');
	  
  });
  
  it("should only process a single named phase1", function() {
    console.log("Test: Single Named Phase1...");
    //console.log(jsontron.JSONTRON.validate(schInstancePhase, schRules_multiplePhases, ['phaseid1']).valid);
    myReport = jsontron.JSONTRON.validate(schInstancePhase, schRules_multiplePhases, ['phaseid1']);
    console.log("Validity should be true : " +  myReport.valid);
    //expect(jsontron.JSONTRON.validate(schInstancePhase, schRules_multiplePhases, ['phaseid1']).valid).toBe(true);
    expect(myReport.valid).toBe(true);

  });
  
    
  it("should only process a single named phase2", function() {
	  	console.log("Test: Single Named Phase2...");

		console.log("testing phase 2 :" + jsontron.JSONTRON.validate(schInstancePhase, schRules_multiplePhases, ['phaseid2']).valid );
	    expect(jsontron.JSONTRON.validate(schInstancePhase, schRules_multiplePhases, ['phaseid2']).valid).toBe(true);

	  });
	 
  
  it("should process multiple named phases", function() {
	    console.log("Test: Multiple Named Phases...");

	    expect(jsontron.JSONTRON.validate(schInstancePhase, schRules_multiplePhases, ['phaseid1', 'phaseid2']).valid).toBe(true);

	  });
  
  it("should process all phases with keyword #ALL", function() {
	  
	  	console.log("Test: All Phases with Keyword #ALL...");
	    expect(jsontron.JSONTRON.validate(schInstancePhase, schRules_multiplePhases, ['#ALL']).valid).toBe(true);

	  });
  
  it("should process default phase with keyword #DEFAULT", function() {
	  
	  	console.log("Test: Default Phase with #DEFAULT Keyword...");
	    expect(jsontron.JSONTRON.validate(schInstancePhase, schRules_multiplePhases, ['#DEFAULT']).valid).toBe(true);

	  });
  
  it("should process all phases as no phases are mentioned", function() {
	  
	  	console.log("Test: All phases when no phases are mentioned...");
	    expect(jsontron.JSONTRON.validate(schInstancePhase, schRules_multiplePhases).valid).toBe(true);

	  });
  
  it("should process all phases as invalid phase name is mentioned", function() {
	  
	  	console.log("Test: All phases when wrong phase is mentioned...");
	    expect(jsontron.JSONTRON.validate(schInstancePhase, schRules_multiplePhases, ['blah']).valid).toBe(true);

	  });
  
  
});


//*******************************************************************************************
// 						***** TESTS BELOW WILL USE THE BAD DATA *****
//						***** loan amount in first loan is increased***
//						***** loan id in second loan is changed *****
//*******************************************************************************************

describe("Phase Tests with bad data", function() {
	  var jsontron = require('../../../lib/jsontron.js');
	  //var schInstance = require('../../../../../data/dissertation/loandata.json');
	  var schInstance_phase_bad1 = require('../../../data/dissertation/phase/loandata_phase_bad1.json');
	  var schRules_multiplePhases2 = require('../../../data/dissertation/phase/loandata-rules_dissertation_multiplePhases_good1.json');
	  //var myReport;
	  //var valid;

	  beforeEach(function() {
		  // Reset the report and validity
	    //myReport = new Report();
	   console.log("Before Each. Report is: "+ myReport );
	  });
	  
	  afterEach(function() {
		  // Reset the report and validity
	    //myReport = jsontron.myReport;
	    console.log("After Each. Report is: "+ myReport );
	    console.log("After Each. Report is: "+ myReport.valid );
	  });

	  //good data
	  it("should only process a single named phase1", function() {
	    console.log("Test: Single Named Phase1...");
	    expect(jsontron.JSONTRON.validate(schInstance_phase_bad1, schRules_multiplePhases2, ['phaseid1']).valid).not.toBe(true);

	  });
	  
	  	  
	  it("should only process a single named phase2", function() {
		  	console.log("Test: Single Named Phase2...");

			console.log("testing phase 2 :" + jsontron.JSONTRON.validate(schInstance_phase_bad1, schRules_multiplePhases2, ['phaseid2']).valid );
		    expect(jsontron.JSONTRON.validate(schInstance_phase_bad1, schRules_multiplePhases2, ['phaseid2']).valid).not.toBe(true);

		  });
		 
	  
	  it("should process multiple named phases", function() {
		  
		    console.log("Test: Multiple Named Phases...");
		    expect(jsontron.JSONTRON.validate(schInstance_phase_bad1, schRules_multiplePhases2, ['phaseid1', 'phaseid2']).valid).not.toBe(true);

		  });
	  
	  it("should process all phases with keyword #ALL", function() {
		  
		  	console.log("Test: All Phases with Keyword #ALL...");
		    expect(jsontron.JSONTRON.validate(schInstance_phase_bad1, schRules_multiplePhases2, ['#ALL']).valid).not.toBe(true);

		  });
	  
	  it("should process default phase with keyword #DEFAULT", function() {
		  
		  	console.log("Test: Default Phase with #DEFAULT Keyword...");
		    expect(jsontron.JSONTRON.validate(schInstance_phase_bad1, schRules_multiplePhases2, ['#DEFAULT']).valid).not.toBe(true);

		  });
	  
	  it("should process all phases as no phases are mentioned", function() {
		  
		  	console.log("Test: All phases when no phases are mentioned...");
		    expect(jsontron.JSONTRON.validate(schInstance_phase_bad1, schRules_multiplePhases2).valid).not.toBe(true);

		  });
	  
	  it("should process all phases as invalid phase name is mentioned", function() {
		  
		  	console.log("Test: All phases when wrong phase is mentioned...");
		    expect(jsontron.JSONTRON.validate(schInstance_phase_bad1, schRules_multiplePhases2, ['blah']).valid).not.toBe(true);

		  });
	  
	  
	});

