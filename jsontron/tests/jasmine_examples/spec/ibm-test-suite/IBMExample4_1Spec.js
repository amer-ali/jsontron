describe("IBM Example 4.1 tests. The test ", function() {
  var jsontron = require('../../../../lib/jsontron.js');
  var schInstance_good1 = require('../../../../data/ibm-test-suite/4.1/eg4_1_good1.json');
  var schInstance_bad1 = require('../../../../data/ibm-test-suite/4.1/eg4_1_bad1.json');
  //var schInstance_bad2 = require('../../../../data/ibm-test-suite/4.1/eg3_1_bad2.json');
  var schRules_doc = require('../../../../data/ibm-test-suite/4.1/eg4_1-rules.json');


  beforeEach(function() {

  });

  //good data
  it("should be false. Good Data", function() {
    console.log("Test: ibm 4.1 Good...");
    // overall it should be false because one author has .mil and other doesn't
    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc).valid).toBe(false);
    //there should be total 2 validations as there are two authors
    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc).validations.length).toEqual(2);
    //one author has mil so it should be true, so only one should be false
    expect(jsontron.JSONTRON.validate(schInstance_good1, schRules_doc).finalValidationReport.length).toEqual(1);

  });
  
  //bad data
  it("should be false. Bad Data", function() {
	    console.log("Test: ibm 4.1 Bad 1...");
	    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc).valid).toBe(false);
	    //there should be only 1 author node
	    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc).validations.length).toEqual(1);
	    // this author doesn't have mil at the end of the email so it should be false
	    expect(jsontron.JSONTRON.validate(schInstance_bad1, schRules_doc).finalValidationReport.length).toEqual(1);

	  });
  

  
});




