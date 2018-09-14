describe("IBM Example 4.3 tests. The test ", function() {
  var jsontron = require('../../../../lib/jsontron.js');
  var schInstance_good1 = require('../../../../data/ibm-test-suite/4.3R/eg4_3_good1.json');
  var schInstance_bad1 = require('../../../../data/ibm-test-suite/4.3R/eg4_3_bad1.json');
  var schInstance_bad2 = require('../../../../data/ibm-test-suite/4.3R/eg4_3_bad2.json');
  var schRules_doc = require('../../../../data/ibm-test-suite/4.3R/eg4_3-rules.json');


  beforeEach(function() {

  });

  //good data
  it("should be true", function() {
    console.log("Test: ibm 4.3 Good...");
    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc).valid).toBe(true);

  });
  
  //bad data. Missing subtitle
  it("should be false", function() {
	    console.log("Test: ibm 4.3 Bad 1...");
	    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc).valid).toBe(false);

	  });
  
  //bad data. There is another element in between title and subtitle
  it("should be false", function() {
	    console.log("Test: ibm 4.3 Bad 1...");
	    expect(jsontron.JSONTRON.validate(schInstance_bad2, schRules_doc).valid).toBe(false);

	  });
  
});




