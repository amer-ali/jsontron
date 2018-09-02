describe("IBM Example 4.5 tests. The test ", function() {
  var jsontron = require('../../../../lib/jsontron.js');
  var schInstance_good1 = require('../../../../data/ibm-test-suite/4.5/eg4_5_good1.json');
  var schInstance_good2 = require('../../../../data/ibm-test-suite/4.5/eg4_5_good2.json');
  var schInstance_bad1 = require('../../../../data/ibm-test-suite/4.5/eg4_5_bad1.json');
  var schInstance_bad2 = require('../../../../data/ibm-test-suite/4.5/eg4_5_bad2.json');
  var schInstance_bad3 = require('../../../../data/ibm-test-suite/4.5/eg4_5_bad3.json');
  var schRules_doc = require('../../../../data/ibm-test-suite/4.5/eg4_5-rules.json');


  beforeEach(function() {

  });

  //good data
  it("should be true", function() {
    console.log("Test: ibm 4.5 Good 1...");
    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc).valid).toBe(true);

  });
  
  //good data
  it("should be true", function() {
    console.log("Test: ibm 4.5 Good 2...");
    expect(jsontron.JSONTRON.validate(schInstance_good2, schRules_doc).valid).toBe(true);

  });
  
  //bad data
  it("should be false", function() {
	    console.log("Test: ibm 4.5 Bad 1...");
	    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc).valid).toBe(false);

	  });
  
  //bad data
  it("should be false", function() {
	    console.log("Test: ibm 4.5 Bad 2...");
	    expect(jsontron.JSONTRON.validate(schInstance_bad2, schRules_doc).valid).toBe(false);

	  });
  
  //bad data
  it("should be false", function() {
	    console.log("Test: ibm 4.5 Bad 3...");
	    expect(jsontron.JSONTRON.validate(schInstance_bad3, schRules_doc).valid).toBe(false);

	  });
  
});




