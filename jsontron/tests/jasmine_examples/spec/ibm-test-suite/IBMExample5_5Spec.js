describe("IBM Example 5.5 tests. Quick Check Phase. The test ", function() {
  var jsontron = require('../../../../lib/jsontron.js');
  var schInstance_good1 = require('../../../../data/ibm-test-suite/5.5/eg5_5_good1.json');
  var schInstance_good2 = require('../../../../data/ibm-test-suite/5.5/eg5_5_good2.json');
  var schInstance_bad1 = require('../../../../data/ibm-test-suite/5.5/eg5_5_bad1.json');
  var schInstance_bad2 = require('../../../../data/ibm-test-suite/5.5/eg5_5_bad2.json');
  var schInstance_bad3 = require('../../../../data/ibm-test-suite/5.5/eg5_5_bad3.json');
  var schInstance_bad4 = require('../../../../data/ibm-test-suite/5.5/eg5_5_bad4.json');
  var schRules_doc = require('../../../../data/ibm-test-suite/5.5/eg5_5-rules.json');


  beforeEach(function() {

  });

  //good data
  it("should be true . Good 1 ", function() {
    console.log("Test: ibm 5.5 Good 1...");
    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc, ['quick-check']).valid).toBe(true);
    
    //total 14 validations
    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc, ['quick-check']).validations.length).toEqual(1);
    
    // 3 failed validations
    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc, ['quick-check']).finalValidationReport.length).toEqual(0);

  });

  //good data
  it("should be true . Good 2 ", function() {
    console.log("Test: ibm 5.5 Good 1...");
    expect(jsontron.JSONTRON.validate(schInstance_good2, schRules_doc, ['quick-check']).valid).toBe(true);
    
    //total 14 validations
    expect(jsontron.JSONTRON.validate(schInstance_good2, schRules_doc, ['quick-check']).validations.length).toEqual(1);
    
    // 3 failed validations
    expect(jsontron.JSONTRON.validate(schInstance_good2, schRules_doc, ['quick-check']).finalValidationReport.length).toEqual(0);

  });
  
  //bad data
  it("should be true . bad 1 ", function() {
    
    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc, ['quick-check']).valid).toBe(false);
    
    //total 14 validations
    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc, ['quick-check']).validations.length).toEqual(1);
    
    // 3 failed validations
    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc, ['quick-check']).finalValidationReport.length).toEqual(1);

  });
  
  //bad data
  it("should be true . bad 2 ", function() {
    
    expect(jsontron.JSONTRON.validate(schInstance_bad2, schRules_doc, ['quick-check']).valid).toBe(true);
    
    //total 14 validations
    expect(jsontron.JSONTRON.validate(schInstance_bad2, schRules_doc, ['quick-check']).validations.length).toEqual(1);
    
    // 3 failed validations
    expect(jsontron.JSONTRON.validate(schInstance_bad2, schRules_doc, ['quick-check']).finalValidationReport.length).toEqual(0);

  });
  
  
  //bad data 3
  it("should be true . bad 3 ", function() {
    
    expect(jsontron.JSONTRON.validate(schInstance_bad3, schRules_doc, ['quick-check']).valid).toBe(true);
    
    //total 14 validations
    expect(jsontron.JSONTRON.validate(schInstance_bad3, schRules_doc, ['quick-check']).validations.length).toEqual(1);
    
    // 3 failed validations
    expect(jsontron.JSONTRON.validate(schInstance_bad3, schRules_doc, ['quick-check']).finalValidationReport.length).toEqual(0);

  });
  
  
  //bad data 4
  it("should be true . bad 4 ", function() {
    
    expect(jsontron.JSONTRON.validate(schInstance_bad4, schRules_doc, ['quick-check']).valid).toBe(true);
    
    //total 14 validations
    expect(jsontron.JSONTRON.validate(schInstance_bad4, schRules_doc, ['quick-check']).validations.length).toEqual(1);
    
    // 3 failed validations
    expect(jsontron.JSONTRON.validate(schInstance_bad4, schRules_doc, ['quick-check']).finalValidationReport.length).toEqual(0);

  });
  
  
});



describe("IBM Example 5.5 tests. Process Link Phase. The test ", function() {
	  var jsontron = require('../../../../lib/jsontron.js');
	  var schInstance_good1 = require('../../../../data/ibm-test-suite/5.5/eg5_5_good1.json');
	  var schInstance_good2 = require('../../../../data/ibm-test-suite/5.5/eg5_5_good2.json');
	  var schInstance_bad1 = require('../../../../data/ibm-test-suite/5.5/eg5_5_bad1.json');
	  var schInstance_bad2 = require('../../../../data/ibm-test-suite/5.5/eg5_5_bad2.json');
	  var schInstance_bad3 = require('../../../../data/ibm-test-suite/5.5/eg5_5_bad3.json');
	  var schInstance_bad4 = require('../../../../data/ibm-test-suite/5.5/eg5_5_bad4.json');
	  var schRules_doc = require('../../../../data/ibm-test-suite/5.5/eg5_5-rules.json');


	  beforeEach(function() {

	  });

	  //good data
	  it("should be true . Good 1 ", function() {
	    
	    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc, ['process-link']).valid).toBe(false);
	    
	    //total 14 validations
	    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc, ['process-link']).validations.length).toEqual(16);
	    
	    // 3 failed validations
	    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc, ['process-link']).finalValidationReport.length).toEqual(11);

	  });

	  //good data
	  it("should be true . Good 2 ", function() {
	    
	    expect(jsontron.JSONTRON.validate(schInstance_good2, schRules_doc, ['process-link']).valid).toBe(false);
	    
	    //total 14 validations
	    expect(jsontron.JSONTRON.validate(schInstance_good2, schRules_doc, ['process-link']).validations.length).toEqual(14);
	    
	    // 3 failed validations
	    expect(jsontron.JSONTRON.validate(schInstance_good2, schRules_doc, ['process-link']).finalValidationReport.length).toEqual(6);

	  });
	  
	  //bad data
	  it("should be true . bad 1 ", function() {
	    
	    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc, ['process-link']).valid).toBe(false);
	    
	    //total 14 validations
	    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc, ['process-link']).validations.length).toEqual(15);
	    
	    // 3 failed validations
	    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc, ['process-link']).finalValidationReport.length).toEqual(13);

	  });
	  
	  //bad data
	  it("should be true . bad 2 ", function() {
	    
	    expect(jsontron.JSONTRON.validate(schInstance_bad2, schRules_doc, ['process-link']).valid).toBe(false);
	    
	    //total 14 validations
	    expect(jsontron.JSONTRON.validate(schInstance_bad2, schRules_doc, ['process-link']).validations.length).toEqual(15);
	    
	    // 3 failed validations
	    expect(jsontron.JSONTRON.validate(schInstance_bad2, schRules_doc, ['process-link']).finalValidationReport.length).toEqual(11);

	  });
	  
	  
	  //bad data 3
	  it("should be true . bad 3 ", function() {
	    
	    expect(jsontron.JSONTRON.validate(schInstance_bad3, schRules_doc, ['process-link']).valid).toBe(false);
	    
	    //total 14 validations
	    expect(jsontron.JSONTRON.validate(schInstance_bad3, schRules_doc, ['process-link']).validations.length).toEqual(12);
	    
	    // 3 failed validations
	    expect(jsontron.JSONTRON.validate(schInstance_bad3, schRules_doc, ['process-link']).finalValidationReport.length).toEqual(5);

	  });
	  
	  
	  //bad data 4
	  it("should be true . bad 4 ", function() {
	    
	    expect(jsontron.JSONTRON.validate(schInstance_bad4, schRules_doc, ['process-link']).valid).toBe(false);
	    
	    //total 14 validations
	    expect(jsontron.JSONTRON.validate(schInstance_bad4, schRules_doc, ['process-link']).validations.length).toEqual(16);
	    
	    // 3 failed validations
	    expect(jsontron.JSONTRON.validate(schInstance_bad4, schRules_doc, ['process-link']).finalValidationReport.length).toEqual(11);

	  });
	  
	  
	});




describe("IBM Example 5.5 tests. Full Check Phase. The test ", function() {
	  var jsontron = require('../../../../lib/jsontron.js');
	  var schInstance_good1 = require('../../../../data/ibm-test-suite/5.5/eg5_5_good1.json');
	  var schInstance_good2 = require('../../../../data/ibm-test-suite/5.5/eg5_5_good2.json');
	  var schInstance_bad1 = require('../../../../data/ibm-test-suite/5.5/eg5_5_bad1.json');
	  var schInstance_bad2 = require('../../../../data/ibm-test-suite/5.5/eg5_5_bad2.json');
	  var schInstance_bad3 = require('../../../../data/ibm-test-suite/5.5/eg5_5_bad3.json');
	  var schInstance_bad4 = require('../../../../data/ibm-test-suite/5.5/eg5_5_bad4.json');
	  var schRules_doc = require('../../../../data/ibm-test-suite/5.5/eg5_5-rules.json');


	  beforeEach(function() {

	  });

	  //good data
	  it("should be true . Good 1 ", function() {
	    console.log("Test: ibm 5.5 Good 1...");
	    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc, ['full-check']).valid).toBe(true);
	    
	    //total 14 validations
	    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc, ['full-check']).validations.length).toEqual(4);
	    
	    // 3 failed validations
	    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc, ['full-check']).finalValidationReport.length).toEqual(0);

	  });

	  //good data
	  it("should be true . Good 2 ", function() {
	    console.log("Test: ibm 5.5 Good 1...");
	    expect(jsontron.JSONTRON.validate(schInstance_good2, schRules_doc, ['full-check']).valid).toBe(true);
	    
	    //total 14 validations
	    expect(jsontron.JSONTRON.validate(schInstance_good2, schRules_doc, ['full-check']).validations.length).toEqual(4);
	    
	    // 3 failed validations
	    expect(jsontron.JSONTRON.validate(schInstance_good2, schRules_doc, ['full-check']).finalValidationReport.length).toEqual(0);

	  });
	  
	  //bad data
	  it("should be true . bad 1 ", function() {
	    
	    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc, ['full-check']).valid).toBe(false);
	    
	    //total 14 validations
	    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc, ['full-check']).validations.length).toEqual(2);
	    
	    // 3 failed validations
	    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc, ['full-check']).finalValidationReport.length).toEqual(2);

	  });
	  
	  //bad data
	  it("should be true . bad 2 ", function() {
	    
	    expect(jsontron.JSONTRON.validate(schInstance_bad2, schRules_doc, ['full-check']).valid).toBe(false);
	    
	    //total 14 validations
	    expect(jsontron.JSONTRON.validate(schInstance_bad2, schRules_doc, ['full-check']).validations.length).toEqual(4);
	    
	    // 3 failed validations
	    expect(jsontron.JSONTRON.validate(schInstance_bad2, schRules_doc, ['full-check']).finalValidationReport.length).toEqual(1);

	  });
	  
	  
	  //bad data 3
	  it("should be true . bad 3 ", function() {
	    
	    expect(jsontron.JSONTRON.validate(schInstance_bad3, schRules_doc, ['full-check']).valid).toBe(false);
	    
	    //total 14 validations
	    expect(jsontron.JSONTRON.validate(schInstance_bad3, schRules_doc, ['full-check']).validations.length).toEqual(4);
	    
	    // 3 failed validations
	    expect(jsontron.JSONTRON.validate(schInstance_bad3, schRules_doc, ['full-check']).finalValidationReport.length).toEqual(1);

	  });
	  
	  
	  //bad data 4
	  it("should be true . bad 4 ", function() {
	    
	    expect(jsontron.JSONTRON.validate(schInstance_bad4, schRules_doc, ['full-check']).valid).toBe(true);
	    
	    //total 14 validations
	    expect(jsontron.JSONTRON.validate(schInstance_bad4, schRules_doc, ['full-check']).validations.length).toEqual(4);
	    
	    // 3 failed validations
	    expect(jsontron.JSONTRON.validate(schInstance_bad4, schRules_doc, ['full-check']).finalValidationReport.length).toEqual(0);

	  });
	  
	  
	});



