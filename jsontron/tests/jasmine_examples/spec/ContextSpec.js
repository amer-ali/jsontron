describe("Context tests with good data", function() {
  var jsontron = require('../../../lib/jsontron.js');
  var schInstance = require('../../../data/dissertation/context/loandata_dataForContext_good1.json');
  var schRules_doc = require('../../../data/dissertation/context/loandata-rules_dissertation_context_good1.json');
  //var myReport;
  //var valid;

  beforeEach(function() {
	  // Reset the report and validity
    //myReport = [];
    //valid = false;
  });

  //good data
  it("should only process rules in a single pattern", function() {
    console.log("Test: Single Pattern through named phase...");
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['phaseid1']).valid).toBe(true);

  });
  
    
  it("should only process a single pattern from different phase - phase2", function() {
	  	console.log("Test: Single Pattern from Phase2...");

		//console.log("testing phase 2 :" + jsontron.JSONTRON.validate(schInstance, schRules_doc, ['phaseid2']).valid );
	    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['precheck']).valid).toBe(true);

	  });
	 
  

  
});


//*******************************************************************************************
// 						***** TESTS BELOW WILL USE THE BOOKSTORE DATA *****

//*******************************************************************************************


describe("Context Tests with bookstore data", function() {
	  var jsontron = require('../../../lib/jsontron.js');
	  //var schInstance = require('../../../../../data/dissertation/loandata.json');
	  var schInstance1 = require('../../../data/dissertation/context/bookdata_dataForContext_good1.json');
	  var schRules_doc = require('../../../data/dissertation/context/bookdata-rules_dissertation_context_good1.json');
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
	  var schInstance1 = require('../../../data/dissertation/context/bookdata_dataForContext_bad1.json');
	  var schRules_doc = require('../../../data/dissertation/context/bookdata-rules_dissertation_context_good1.json');
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


