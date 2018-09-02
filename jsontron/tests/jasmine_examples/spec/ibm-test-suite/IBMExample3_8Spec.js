describe("IBM Example 3.8 tests. The test ", function() {
  var jsontron = require('../../../../lib/jsontron.js');
  var schInstance_good1 = require('../../../../data/ibm-test-suite/3.8/eg3_8_good1.json');
  var schInstance_bad1 = require('../../../../data/ibm-test-suite/3.8/eg3_8_bad1.json');
  //var schInstance_bad2 = require('../../../../data/ibm-test-suite/3.8/eg3_1_bad2.json');
  var schRules_doc = require('../../../../data/ibm-test-suite/3.8/eg3_8-rules.json');


  beforeEach(function() {

  });

  //good data
  it("should be true", function() {
    console.log("Test: ibm 3.8 Good...");
    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc).valid).toBe(true);

  });
  
  //bad data
  it("should be false", function() {
	    console.log("Test: ibm 3.8 Bad 1...");
	    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc).valid).toBe(false);

	  });
  

  
});




