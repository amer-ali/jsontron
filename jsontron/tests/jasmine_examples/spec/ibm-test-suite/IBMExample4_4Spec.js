describe("IBM Example 4.4 tests. The test ", function() {
  var jsontron = require('../../../../lib/jsontron.js');
  var schInstance_good1 = require('../../../../data/ibm-test-suite/4.4/eg4_4_good1.json');
  var schInstance_bad1 = require('../../../../data/ibm-test-suite/4.4/eg4_4_bad1.json');
  //var schInstance_bad2 = require('../../../../data/ibm-test-suite/4.4/eg3_1_bad2.json');
  var schRules_doc = require('../../../../data/ibm-test-suite/4.4/eg4_4-rules.json');


  beforeEach(function() {

  });

  //good data
  it("should be true", function() {
    console.log("Test: ibm 4.4 Good...");
    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc).valid).toBe(false);
    
    //total 7 elements in data so there should be 7 validations
    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc).validations.length).toEqual(7);
    
    // out of 7 there are 3 elements that contain link, so there should be 4 elements that should fail validations
    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc).finalValidationReport.length).toEqual(4);

  });
  
  //bad data
  it("should be false", function() {
	    console.log("Test: ibm 4.4 Bad 1...");
	    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc).valid).toBe(false);
	    
	    //total 6 elements in data so there should be 6 validations
	    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc).validations.length).toEqual(6);
	    
	    // no element has link so all 6 should fail
	    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc).finalValidationReport.length).toEqual(6);

	  });
  

  
});




