
var jp = require('jsonpath');

//var schInstance = require("./data/dissertation/context/bookdata_dataForContext_good1.json");
//var authors = jp.query(schInstance, '$.store.book');

//var schInstance = require("./data/dissertation/loandata-main/loandata-main-bad1.json");
//var loans = jp.query(schInstance, "$..loan_data.loans[?(@.origination_id == 'branch')]");

var schInstance = {
		  "doc": {
			    "prologue": {
			      "title": "Faster than light travel",
			      "subtitle": "From fantasy to reality"
			    },
			    "section":{}
			  }
			}

var contextNode = jp.query(schInstance, "$..prologue");
console.log(contextNode);
console.log(contextNode.length);


var parent = (((Object.keys(contextNode[0])).indexOf('subtitle')) - ((Object.keys(contextNode[0])).indexOf('title'))) == 1;

console.log(parent);
//console.log(parent.length)




