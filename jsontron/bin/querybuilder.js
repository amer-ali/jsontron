/**
 * This utility can be used to build and test the 'context' and assertion 'test' expressions
 * Just point schInstance to your instance and then build the contextNode
 * Then use the contextNode to build the test expression
 */
var jp = require('jsonpath');

var schInstance = require("../data/dissertation/context/bookdata_dataForContext_good1.json");
var schInstance = require("../data/dissertation/context/loandata_dataForContext_good1.json");
//var authors = jp.query(schInstance, '$.store.book');

//var schInstance = require("./data/dissertation/loandata-main/loandata-main-bad1.json");
//var loans = jp.query(schInstance, "$..loan_data.loans[?(@.origination_id == 'branch')]");



var contextNode = jp.query(schInstance, "$..loans.*"); // select all book items in the document
//var contextNode = jp.query(schInstance, "$.loan_data.loans[?(@.loan_type === 'FHA')]");
console.log(contextNode);
console.log(contextNode.length);

// below query is run against the context selected above
// it selects the books that are priced more than 20 dollars
// one crucial difference to note between this utility and the jsontron implementation
// here the test will not run iteratively against all the nodes returned from contextNode expression
var test = jp.query(contextNode, "$..[?(@.loan_type == 'FHA')]");

console.log(test);
console.log(test.length)




