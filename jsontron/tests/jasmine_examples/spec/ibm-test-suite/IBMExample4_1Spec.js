describe("IBM Example 4.1 tests. The test ", function() {
  var jsontron = require('../../../../lib/jsontron.js');
  var schInstance_good1 = require('../../../../data/ibm-test-suite/4.1/eg4_1_good1.json');
  var schInstance_bad1 = require('../../../../data/ibm-test-suite/4.1/eg4_1_bad1.json');
  //var schInstance_bad2 = require('../../../../data/ibm-test-suite/4.1/eg3_1_bad2.json');
  var schRules_doc = require('../../../../data/ibm-test-suite/4.1/eg4_1-rules.json');


  beforeEach(function() {

  });

  //good data
  it("should be true", function() {
    console.log("Test: ibm 4.1 Good...");
    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc).valid).toBe(true);

  });
  
  //bad data
  it("should be false", function() {
	    console.log("Test: ibm 4.1 Bad 1...");
	    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc).valid).toBe(false);

	  });
  

  
});




