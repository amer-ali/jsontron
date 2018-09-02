describe("IBM Example 5.5 tests. The test ", function() {
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
  it("should be true", function() {
    console.log("Test: ibm 5.5 Good 1...");
    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc).valid).toBe(true);

  });

  //good data
  it("should be true", function() {
    console.log("Test: ibm 5.5 Good 2...");
    expect(jsontron.JSONTRON.validate(schInstance_good2, schRules_doc).valid).toBe(true);

  });
  
  //bad data
  it("should be false", function() {
	    console.log("Test: ibm 5.5 Bad 1...");
	    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc).valid).toBe(false);

	  });
  
  //bad data
  it("should be false", function() {
	    console.log("Test: ibm 5.5 Bad 2...");
	    expect(jsontron.JSONTRON.validate(schInstance_bad2, schRules_doc).valid).toBe(false);

	  });
  
  //bad data
  it("should be false", function() {
	    console.log("Test: ibm 5.5 Bad 3...");
	    expect(jsontron.JSONTRON.validate(schInstance_bad3, schRules_doc).valid).toBe(false);

	  });
  
  
  //bad data
  it("should be false", function() {
	    console.log("Test: ibm 5.5 Bad 4...");
	    expect(jsontron.JSONTRON.validate(schInstance_bad4, schRules_doc).valid).toBe(false);

	  });
  
  
});




