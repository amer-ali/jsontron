//*******************************************************************************************
// 						***** MAIN EXAMPLE 1 - FHA *****
//						***** Rule: FHA Loan amount can't be more than 500K***
//						***** Good Data has 500K *****
//*******************************************************************************************


describe("Main Example tests with good data. FHA MAX AMOUNT.", function() {
  var jsontron = require('../../../lib/jsontron.js');
  var schInstance = require('../../../data/dissertation/loandata-main/loandata-main.json');
  var schRules_doc = require('../../../data/dissertation/loandata-main/loandata-rules-main.json');

  beforeEach(function() {
	  // Reset the report and validity
    //myReport = [];
    //valid = false;
  });

  //good data
  it("should not process FHA loan that is more than 500K", function() {
	  
    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['fha_max']).valid).toBe(true);

  });
  
  it("should only process FHA loan if max amount is less than 500K. Should have single assertion", function() {
	    //should have only a single assertion validated
	    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['fha_max']).validations.length).toEqual(1);
	    
	  });
	  
	  it("should only process FHA loan if max amount is less than 500K. Should have 0 validation errors", function() {
	    //should not have any failed assertions
	    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['fha_max']).finalValidationReport.length).toEqual(0);
	  });
	  
	  it("should only process FHA loan if max amount is less than 500K. Should have zero sys errors", function() {
	    //should not have any system errors
	    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['fha_max']).errors.length).toEqual(0);
	  });
	  
	  it("should only process FHA loan if max amount is less than 500K. Should have no warnings", function() {
	    //should not have any warnings
	    expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['fha_max']).warnings.length).toEqual(0);

	  });
    
});


//*******************************************************************************************
//	***** MAIN EXAMPLE 2 - FHA MIP *****
//***** Rule: FHA Loan must have Mortgage Insurance Premium***
//***** Good Data has MIP *****
//*******************************************************************************************


describe("Main Example tests with good data. FHA MIP.", function() {
var jsontron = require('../../../lib/jsontron.js');
var schInstance = require('../../../data/dissertation/loandata-main/loandata-main.json');
var schRules_doc = require('../../../data/dissertation/loandata-main/loandata-rules-main.json');

beforeEach(function() {
// Reset the report and validity
//myReport = [];
//valid = false;
});

//good data
it("should not process FHA loan that doesn't have mortgage insurance premium", function() {

expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['fha_mip']).valid).toBe(true);

});

it("should only process FHA loan to see if the mip_rate is more than 0. Should have single assertion", function() {
//should have only a single assertion validated
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['fha_mip']).validations.length).toEqual(1);

});

it("should only process FHA loan to see if the mip_rate is more than 0. Should have 0 validation errors", function() {
//should not have any failed assertions
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['fha_mip']).finalValidationReport.length).toEqual(0);
});

it("should only process FHA loan to see if the mip_rate is more than 0. Should have zero sys errors", function() {
//should not have any system errors
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['fha_mip']).errors.length).toEqual(0);
});

it("should only process FHA loan to see if the mip_rate is more than 0. Should have no warnings", function() {
//should not have any warnings
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['fha_mip']).warnings.length).toEqual(0);

});

});



//*******************************************************************************************
//	***** MAIN EXAMPLE 3 - TRADITIONAL MAX AMOUNT *****
//***** Rule: Traditonal Loan cannot be more than 1MM***
//***** Good Data has less than 1MM *****
//*******************************************************************************************


describe("Main Example tests with good data. FHA MIP.", function() {
var jsontron = require('../../../lib/jsontron.js');
var schInstance = require('../../../data/dissertation/loandata-main/loandata-main.json');
var schRules_doc = require('../../../data/dissertation/loandata-main/loandata-rules-main.json');

beforeEach(function() {
//Reset the report and validity
//myReport = [];
//valid = false;
});

//good data
it("should not process Traditonal loan that is more than 1MM", function() {

expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['traditional_max']).valid).toBe(true);

});

it("should only process Traditional loan that is less than 1MM. Should have single assertion", function() {
//should have only a single assertion validated
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['traditional_max']).validations.length).toEqual(1);

});

it("should only process Traditional loan that is less than 1MM. Should have 0 validation errors", function() {
//should not have any failed assertions
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['traditional_max']).finalValidationReport.length).toEqual(0);
});

it("should only process Traditional loan that is less than 1MM. Should have zero sys errors", function() {
//should not have any system errors
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['traditional_max']).errors.length).toEqual(0);
});

it("should only process Traditional loan that is less than 1MM. Should have no warnings", function() {
//should not have any warnings
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['traditional_max']).warnings.length).toEqual(0);

});

});
  


//*******************************************************************************************
//	***** MAIN EXAMPLE 4 - JUMBO MIN AMOUNT *****
//***** Rule: Jumbo Loan cannot be less than 1MM***
//***** Good Data has more than 1MM *****
//*******************************************************************************************


describe("Main Example tests with good data. JUMBO MIN.", function() {
var jsontron = require('../../../lib/jsontron.js');
var schInstance = require('../../../data/dissertation/loandata-main/loandata-main.json');
var schRules_doc = require('../../../data/dissertation/loandata-main/loandata-rules-main.json');

beforeEach(function() {
//Reset the report and validity
//myReport = [];
//valid = false;
});

//good data
it("should not process Jumbo loan that is more than 1MM", function() {

expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['jumbo_min']).valid).toBe(true);

});

it("should only process Jumbo loan that is not less than 1MM. Should have single assertion", function() {
//should have only a single assertion validated
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['jumbo_min']).validations.length).toEqual(1);

});

it("should only process Jumbo loan that is not less than 1MM. Should have 0 validation errors", function() {
//should not have any failed assertions
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['jumbo_min']).finalValidationReport.length).toEqual(0);
});

it("should only process Jumbo loan that is not less than 1MM. Should have zero sys errors", function() {
//should not have any system errors
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['jumbo_min']).errors.length).toEqual(0);
});

it("should only process Jumbo loan that is not less than 1MM. Should have no warnings", function() {
//should not have any warnings
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['jumbo_min']).warnings.length).toEqual(0);

});

});




//*******************************************************************************************
//	***** MAIN EXAMPLE 4 - NON FHA MIN DOWN PAYMENT *****
//***** Rule: Non FHA loans should have minimum 20% down payment***
//***** Good Data has 20 percent or more *****
//*******************************************************************************************


describe("Main Example tests with good data. NON FHA MIN DOWN.", function() {
var jsontron = require('../../../lib/jsontron.js');
var schInstance = require('../../../data/dissertation/loandata-main/loandata-main.json');
var schRules_doc = require('../../../data/dissertation/loandata-main/loandata-rules-main.json');

beforeEach(function() {
//Reset the report and validity
//myReport = [];
//valid = false;
});

//good data
it("should not process non-fha loan that has less than 20% down payment", function() {

expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['nonfha_down']).valid).toBe(true);

});

it("should only process non-fha loan that has no less than 20 % down. Should have 2 assertions as there is traditional and jumb loan", function() {
//should have only a single assertion validated
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['nonfha_down']).validations.length).toEqual(2);

});

it("should only process non-fha loan that has no less than 20 % down. Should have 0 validation errors", function() {
//should not have any failed assertions
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['nonfha_down']).finalValidationReport.length).toEqual(0);
});

it("should only process non-fha loan that has no less than 20 % down. Should have zero sys errors", function() {
//should not have any system errors
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['nonfha_down']).errors.length).toEqual(0);
});

it("should only process non-fha loan that has no less than 20 % down. Should have no warnings", function() {
//should not have any warnings
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['nonfha_down']).warnings.length).toEqual(0);

});

});




//*******************************************************************************************
//	***** MAIN EXAMPLE 6 - BRANCH ID *****
//***** Rule: If the loan originated in a branch, then the branch id should be present and not be empty***
//***** Good Data has non empty branch id *****
//*******************************************************************************************


describe("Main Example tests with good data. BRANCH ID.", function() {
var jsontron = require('../../../lib/jsontron.js');
var schInstance = require('../../../data/dissertation/loandata-main/loandata-main.json');
var schRules_doc = require('../../../data/dissertation/loandata-main/loandata-rules-main.json');

beforeEach(function() {
//Reset the report and validity
//myReport = [];
//valid = false;
});

//good data
it("should not process a loan if origination id is branch and it has missing or empty branch id", function() {

expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['branch_id']).valid).toBe(true);

});

it("should only process loans that have non-empty branch id. Should have three assertions as there are three valid loan items", function() {
//should have only a single assertion validated
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['branch_id']).validations.length).toEqual(3);

});

it("should only process loans that have non-empty branch id. Should have 0 validation errors", function() {
//should not have any failed assertions
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['branch_id']).finalValidationReport.length).toEqual(0);
});

it("should only process loans that have non-empty branch id. Should have zero sys errors", function() {
//should not have any system errors
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['branch_id']).errors.length).toEqual(0);
});

it("should only process loans that have non-empty branch id. Should have no warnings", function() {
//should not have any warnings
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['branch_id']).warnings.length).toEqual(0);

});

});




//*******************************************************************************************
//	***** MAIN EXAMPLE 7 - CUSTOMER ID *****
//***** Rule: Customer ID in the loan and Customer ID under Customer object should match***
//***** Good Data has matching customer id *****
//*******************************************************************************************


describe("Main Example tests with good data. CUSTOMER ID.", function() {
var jsontron = require('../../../lib/jsontron.js');
var schInstance = require('../../../data/dissertation/loandata-main/loandata-main.json');
var schRules_doc = require('../../../data/dissertation/loandata-main/loandata-rules-main.json');

beforeEach(function() {
//Reset the report and validity
//myReport = [];
//valid = false;
});

//good data
it("should not process a loan if customer id in the loan item and cusomter id in customer item don't match", function() {

expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['customer_id']).valid).toBe(true);

});

it("should only process loans that have matching customer id under loan and customer items. Should have three assertions as there are three valid loan items", function() {
//should have only a single assertion validated
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['customer_id']).validations.length).toEqual(3);

});

it("should only process loans that have matching customer id under loan and customer items. Should have 0 validation errors", function() {
//should not have any failed assertions
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['customer_id']).finalValidationReport.length).toEqual(0);
});

it("should only process loans that have matching customer id under loan and customer items. Should have zero sys errors", function() {
//should not have any system errors
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['customer_id']).errors.length).toEqual(0);
});

it("should only process loans that have matching customer id under loan and customer items. Should have no warnings", function() {
//should not have any warnings
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['customer_id']).warnings.length).toEqual(0);

});

});



//*******************************************************************************************
//	***** MAIN EXAMPLE 8 - INTEREST RATE MIN MARGIN *****
//***** Rule: Interest rate should be minimum .25 points more than prime rate***
//***** Good Data has .25 or more margin *****
//*******************************************************************************************


describe("Main Example tests with good data. INTEREST RATE MARGIN.", function() {
var jsontron = require('../../../lib/jsontron.js');
var schInstance = require('../../../data/dissertation/loandata-main/loandata-main.json');
var schRules_doc = require('../../../data/dissertation/loandata-main/loandata-rules-main.json');

beforeEach(function() {
//Reset the report and validity
//myReport = [];
//valid = false;
});

//good data
it("should not process a loan if interest rate is less than .25 points from prime rate", function() {

expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['interest_min']).valid).toBe(true);

});

it("should only process loans that have interest rate that have min .25 points more than prime rate. Should have three assertions as there are three valid loan items", function() {
//should have only a single assertion validated
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['interest_min']).validations.length).toEqual(3);

});

it("should only process loans that have interest rate that have min .25 points more than prime rate. Should have 0 validation errors", function() {
//should not have any failed assertions
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['interest_min']).finalValidationReport.length).toEqual(0);
});

it("should only process loans that have interest rate that have min .25 points more than prime rate. Should have zero sys errors", function() {
//should not have any system errors
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['interest_min']).errors.length).toEqual(0);
});

it("should only process loans that have interest rate that have min .25 points more than prime rate. Should have no warnings", function() {
//should not have any warnings
expect(jsontron.JSONTRON.validate(schInstance, schRules_doc, ['interest_min']).warnings.length).toEqual(0);

});

});