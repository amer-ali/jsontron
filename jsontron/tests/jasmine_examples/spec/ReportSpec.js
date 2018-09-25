
describe("Report tests with good data", function() {
  var jsontron = require('../../../lib/jsontron.js');
  var schInstance = require('../../../data/dissertation/report/loandata_dataForReport_good1.json');
  var schRules_doc = require('../../../data/dissertation/report/loandata-rules_dissertation_report_good1.json');
  //var myReport;
  //var valid;

  beforeEach(function() {
	  // Reset the report and validity
    //myReport = [];
    //valid = false;
  });

  //good data. It checks if the loan type is FHA then MIP rate should not be less than 0
  it("should only process FHA loan to see if the mip_rate is more than 0", function() {
    console.log("Test: Single Pattern through named phase...");
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['precheck']).valid).toBe(true);
  });
  
  it("should only process FHA loan to see if the mip_rate is more than 0. Should have single assertion", function() {
    //should have only a single assertion validated
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['precheck']).validations.length).toEqual(1);
    
  });
  
  it("should only process FHA loan to see if the mip_rate is more than 0. Should have 0 validation errors", function() {
    //should not have any failed assertions
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['precheck']).finalValidationReport.length).toEqual(0);
  });
  
  it("should only process FHA loan to see if the mip_rate is more than 0. Should have zero sys errors", function() {
    //should not have any system errors
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['precheck']).errors.length).toEqual(0);
  });
  
  it("should only process FHA loan to see if the mip_rate is more than 0. Should have no warnings", function() {
    //should not have any warnings
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['precheck']).warnings.length).toEqual(0);

  });
  });


describe("Report tests with good data", function() {
	  var jsontron = require('../../../lib/jsontron.js');
	  var schInstance = require('../../../data/dissertation/report/loandata_dataForReport_good1.json');
	  var schRules_doc = require('../../../data/dissertation/report/loandata-rules_dissertation_report_good1.json');
 
  //good data. It checks if the loan type is Tradional then it checks min and max amount of the loan
  //max amount can't be more than $1MM and min amount can't be less than $100K
  // there is 1 traditional loan item. The pattern has 1 rule. The rule has 2 assertions (min and max)
  it("should only process traditional loan to see if it is between $100K and $1MM", function() {
    console.log("Test: traditional min and max amount...");
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['traditional']).valid).toBe(true);
  });
  
  it("should only process traditional loan to see if it is between $100K and $1MM. Should have 2 validations", function() {
    //should have have two assertion validated
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['traditional']).validations.length).toEqual(2);
  });
  
  it("should only process traditional loan to see if it is between $100K and $1MM. Should have 0 validation errors", function() {
    //should not have any failed assertions
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['traditional']).finalValidationReport.length).toEqual(0);
  });
  
  it("should only process traditional loan to see if it is between $100K and $1MM. Should have 0 system errors", function() {
    //should not have any system errors
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['traditional']).errors.length).toEqual(0);
  });
  
  it("should only process traditional loan to see if it is between $100K and $1MM. Should have 0 warnings", function() {
    //should not have any warnings
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['traditional']).warnings.length).toEqual(0);

  });
});
    
describe("Report tests with good data", function() {
	  var jsontron = require('../../../lib/jsontron.js');
	  var schInstance = require('../../../data/dissertation/report/loandata_dataForReport_good1.json');
	  var schRules_doc = require('../../../data/dissertation/report/loandata-rules_dissertation_report_good1.json');
	  
  //good data. It checks if the loan type is Jumbo then it checks min and max amount of the loan
  //max amount can't be more than $5MM and min amount can't be less than $1MM
  // there are 2 loan item. There are 2 patterns in the phase. Each pattern has 1 rule. The rule has 1 assertion (min or max)
  it("should only process jumbo loan to see if it is between $1MM and $5MM", function() {
    console.log("Test: traditional min and max amount...");
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['jumbo']).valid).toBe(true);
  });
  
  it("should only process jumbo loan to see if it is between $1MM and $5MM. Should have 4 validations", function() {
    //should have have 4 assertion validated. 2 loan items * 2 patterns (with 1 rule with 1 assertion each)
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['jumbo']).validations.length).toEqual(4);
  });
  
  it("should only process jumbo loan to see if it is between $1MM and $5MM. Should have no validation errors", function() {
    //should not have any failed assertions
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['jumbo']).finalValidationReport.length).toEqual(0);
  });
  it("should only process jumbo loan to see if it is between $1MM and $5MM. Should have 0 sys errors", function() {
    //should not have any system errors
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['jumbo']).errors.length).toEqual(0);
  });
  
  it("should only process jumbo loan to see if it is between $1MM and $5MM. Should have 0 warnings", function() {
    //should not have any warnings
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['jumbo']).warnings.length).toEqual(0);

  });
});
  

describe("Report tests with good data", function() {
	  var jsontron = require('../../../lib/jsontron.js');
	  var schInstance = require('../../../data/dissertation/report/loandata_dataForReport_good1.json');
	  var schRules_doc = require('../../../data/dissertation/report/loandata-rules_dissertation_report_good1.json');
	  
//good data. It should process all patterns with #ALL or empty phases if no phase is mentioned
  //in both cases it should process all three phases that contain total of 4 patterns. 
  // pattern 1 has 1 assertion. pattern 2 has 2 assertions. pattern 3 has 2 loans with two assertions
  it("should all phases, all patterns, all loans when ALL is mentioned", function() {
    console.log("Test: traditional min and max amount...");
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['#ALL']).valid).toBe(true);
  });
  
  it("should all phases, all patterns, all loans when ALL is mentioned. Total 7 Validations", function() {
    //should have have 4 assertion validated. 2 loan items * 2 patterns (with 1 rule with 1 assertion each)
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['#ALL']).validations.length).toEqual(7);
  });
  
  it("should all phases, all patterns, all loans when ALL is mentioned. Should have 0 validation errors.", function() {
    //should not have any failed assertions
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['#ALL']).finalValidationReport.length).toEqual(0);
  });
  
  it("should all phases, all patterns, all loans when ALL is mentioned. Should have 0 sys errors", function() {
    //should not have any system errors
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['#ALL']).errors.length).toEqual(0);
  });
  
  it("should all phases, all patterns, all loans when ALL is mentioned. Should have 0 warnings", function() {
    //should not have any warnings
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['#ALL']).warnings.length).toEqual(0);

  });
});


describe("Report tests with good data", function() {
	  var jsontron = require('../../../lib/jsontron.js');
	  var schInstance = require('../../../data/dissertation/report/loandata_dataForReport_good1.json');
	  var schRules_doc = require('../../../data/dissertation/report/loandata-rules_dissertation_report_good1.json');
	  
//good data. It should process all patterns when no phase is mentioned
  //it should process all three phases that contain total of 4 patterns. 
  // pattern 1 has 1 assertion. pattern 2 has 2 assertions. pattern 3 has 2 loans with two assertions
  it("should process all phases, all patterns, all loans when no phase mentioned", function() {
    console.log("Test: all phases with empty phase...");
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc).valid).toBe(true);
  });
  
  it("should process all phases, all patterns, all loans when no phase mentioned. Should have 7 validations", function() {
    //should have have 4 assertion validated. 2 loan items * 2 patterns (with 1 rule with 1 assertion each)
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc).validations.length).toEqual(7);
  });
  
  it("should process all phases, all patterns, all loans when no phase mentioned. Should have 0 validtion errors", function() {
    //should not have any failed assertions
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc).finalValidationReport.length).toEqual(0);
  });
  
  it("should process all phases, all patterns, all loans when no phase mentioned. Should have 0 sys errors", function() {
    //should not have any system errors
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc).errors.length).toEqual(0);
  });
  
  it("should process all phases, all patterns, all loans when no phase mentioned. Should have 0 warnings", function() {
    //should not have any warnings
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc).warnings.length).toEqual(1);

  });
});



//});
//*******************************************************************************************
//	***** TESTS BELOW WILL USE THE BAD LOAN DATA *****

//*******************************************************************************************



//*******************************************************************************************
// 						***** TESTS BELOW WILL USE THE BOOKSTORE DATA *****

//*******************************************************************************************


describe("Context Tests with bookstore data", function() {
	  var jsontron = require('../../../lib/jsontron.js');
	  //var schInstance = require('../../../../../data/dissertation/loandata.json');
	  var schInstance1 = require('../../../data/dissertation/report/bookdata_dataForReport_good1.json');
	  var schRules_doc = require('../../../data/dissertation/report/bookdata-rules_dissertation_report_good1.json');
	  //var myReport;
	  //var valid;
	  
	  //BookStore Data
	  
	  beforeEach(function() {
		  // Reset the report and validity
	    //myReport = [];
	    //valid = false;
	  });

	  
	  it("should have total of 4 authors", function() {
	    console.log("Test: Total number of authors...");
	    expect(jsontron.JSONTRON.validate(schInstance1, schRules_doc, ['author_total']).valid).toBe(true);

	  });
	  
	  it("should only have known authors such as Nigel, Waugh, Melville, Tolkien", function() {
		    console.log("Test: known authors...");
		    expect(jsontron.JSONTRON.validate(schInstance1, schRules_doc, ['author_known']).valid).toBe(true);

		  });
	  
	  it("should not contain any other author other than Nigel, Waugh, Melville, Tolkien", function() {
		    console.log("Test: unknown authors...");
		    expect(jsontron.JSONTRON.validate(schInstance1, schRules_doc, ['author_unknown']).valid).toBe(true);

		  });
	  
	  it("should see if there some books available", function() {
		    console.log("Test: Books available...");
		    expect(jsontron.JSONTRON.validate(schInstance1, schRules_doc, ['store_books']).valid).toBe(true);

		  });
	  
	  it("should not have discount more than 5 dollars or 50% of price", function() {
		    console.log("Test: Discount 5 dollars or 50% of price...");
		    expect(jsontron.JSONTRON.validate(schInstance1, schRules_doc, ['store_discount']).valid).toBe(true);

		  });
	  
	  // It should have 0 errors. The error[] array of Report should be empty.
	  it("should not have discount more than 5 dollars or 50% of price. Price more than 5 and discount more than 50 percent", function() {
		    console.log("Test: Discount 5 dollars or 50% of price...");
		    expect(jsontron.JSONTRON.validate(schInstance1, schRules_doc, ['#ALL']).errors.length).toEqual(0);

		  });
	  
	  // It should have 0 warnings. The warnings[] array of Report should be empty.
	  it("should not have discount more than 5 dollars or 50% of price. Price more than 5 and discount more than 50 percent", function() {
		    console.log("Test: Discount 5 dollars or 50% of price...");
		    expect(jsontron.JSONTRON.validate(schInstance1, schRules_doc, ['#ALL']).warnings.length).toEqual(0);

		  });
	  
	  

	});



describe("Context Tests with bookstore data for discounts", function() {
	  var jsontron = require('../../../lib/jsontron.js');
	  //var schInstance = require('../../../../../data/dissertation/loandata.json');
	  var schInstance1 = require('../../../data/dissertation/report/bookdata_dataForReport_bad1.json');
	  var schRules_doc = require('../../../data/dissertation/report/bookdata-rules_dissertation_report_good1.json');
	  //var myReport;
	  //var valid;
	  
	  //BookStore Data
	  
	  beforeEach(function() {
		  // Reset the report and validity
	    //myReport = [];
	    //valid = false;
	  });

	  // overall it should fail because one price is set to 13 and couple of discounts are more that 50% of price
	  it("should not have discount more than 5 dollars or 50% of price. Price more than 5 and discount more than 50 percent", function() {
		    console.log("Test: Discount 5 dollars or 50% of price...");
		    expect(jsontron.JSONTRON.validate(schInstance1, schRules_doc, ['store_discount']).valid).toBe(false);

		  });
	  
	  // It should have 10 validations in totals. Total 5 items (4 books + 1 bicycle) x Total 2 Rules ( 1 assert each) = 10 Validations
	  it("should not have discount more than 5 dollars or 50% of price. Price more than 5 and discount more than 50 percent", function() {
		    console.log("Test: Discount 5 dollars or 50% of price...");
		    expect(jsontron.JSONTRON.validate(schInstance1, schRules_doc, ['store_discount']).validations.length).toEqual(10);

		  });

	  
	  // It should have 4 failed validations. 1 item has price greater than 5 dollars. 3 items have discount that is more than 50% of price
	  it("should not have discount more than 5 dollars or 50% of price. Price more than 5 and discount more than 50 percent", function() {
		    console.log("Test: Discount 5 dollars or 50% of price...");
		    expect(jsontron.JSONTRON.validate(schInstance1, schRules_doc, ['store_discount']).finalValidationReport.length).toEqual(4);

		  });
	  
	  // It should have 0 errors. The error[] array of Report should be empty.
	  it("should not have discount more than 5 dollars or 50% of price. Price more than 5 and discount more than 50 percent", function() {
		    console.log("Test: Discount 5 dollars or 50% of price...");
		    expect(jsontron.JSONTRON.validate(schInstance1, schRules_doc, ['#ALL']).errors.length).toEqual(0);

		  });
	  
	  // It should have 0 warnings. The warnings[] array of Report should be empty.
	  it("should not have discount more than 5 dollars or 50% of price. Price more than 5 and discount more than 50 percent", function() {
		    console.log("Test: Discount 5 dollars or 50% of price...");
		    expect(jsontron.JSONTRON.validate(schInstance1, schRules_doc, ['#ALL']).warnings.length).toEqual(0);

		  });
	  
	  
}); 




