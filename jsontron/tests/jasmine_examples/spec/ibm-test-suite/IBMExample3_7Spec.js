describe("IBM Example 3.7 tests. The test ", function() {
  var jsontron = require('../../../../lib/jsontron.js');
  var schInstance_good1 = require('../../../../data/ibm-test-suite/3.7/eg3_7_good1.json');
  var schInstance_bad1 = require('../../../../data/ibm-test-suite/3.7/eg3_7_bad1.json');
  var schInstance_bad2 = require('../../../../data/ibm-test-suite/3.7/eg3_7_bad2.json');
  var schInstance_bad3 = require('../../../../data/ibm-test-suite/3.7/eg3_7_bad3.json');
  var schRules_doc = require('../../../../data/ibm-test-suite/3.7/eg3_7-rules.json');


  beforeEach(function() {

  });

  //good data
  it("should be true", function() {
    console.log("Test: ibm 3.7 Good...");
    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc).valid).toBe(true);

  });
  
  //bad data
  it("should be false", function() {
	    console.log("Test: ibm 3.7 Bad 1...");
	    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc).valid).toBe(false);

	  });
  
  //bad data
  it("should be false", function() {
	    console.log("Test: ibm 3.7 Bad 2...");
	    expect(jsontron.JSONTRON.validate(schInstance_bad2, schRules_doc).valid).toBe(false);

	  });
    
  //bad data
  it("should be false", function() {
	    console.log("Test: ibm 3.7 Bad 3...");
	    expect(jsontron.JSONTRON.validate(schInstance_bad3, schRules_doc).valid).toBe(false);

	  });
    
  
});




