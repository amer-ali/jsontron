var str = 'jp.query($context, loanid) < 1 && jp.query($context,loanid) < 2234567';
//var str = "jpq:loanid";


mystr = str.replace(/jpq:/i, "jp.query(");

mystr2 = str.slice(4);

//str4 = str.split();
//console.log(str4);
var replacer = function (sstring){
	
	//console.log ("match: " + match);
	//console.log ("P1: " + p1);
	//console.log ("String: " + string);
	//let jpquery = match.slice(4);
	//console.log("JPQuery: " + jpquery);
	let repStr = 'jp.query(ruleContext, ' + sstring;
	return repStr;
	
}

var mystr3 = str.replace(/(jpq:)/ig, replacer("teststring"));

//console.log("Raw String: " + str);
//console.log("MyString: " + mystr);
//console.log("MyString 2: " + mystr2);
//console.log("MyString 3: " + mystr3);

var testFunc = function(blah, blunk){
	
	console.log(blah);
	console.log(blunk);
	//if (typeof blunk == "undefined"){
	if(!blunk){
		
		console.log("Blunk is: " + blunk);
		
	}
//}
}


//testFunc("blaah",[]);

//var mystr4 = "MYSTRING";
//console.log((typeof mystr4 == 'string') && (mystr4.toUpperCase() == 'MYSTRING'));
//console.log(mystr4.toUpperCase);

//console.log(mystr4.toUpperCase());

var testErrorReport = function(arg1, arg2){
	
	try{
		result = blunks;
		
		
	}
	catch(e){
		console.log(e.name + " "+ e.message + " " + e.stack);
		console.log(this._uri);
		
	}
	
}

//testErrorReport('blah', 'blunk');
//var schInstance1 = require("../data/loandata-instance-simple.json");
//var mySchRules1 = require("../data/loandata-instance-single-schematest2.json");
var jp = require('jsonpath');
var schInstance1 = require("../data/ibm-test-suite/3.6/eg3_6_bad1.json");
var mySchRules1 = require("../data/ibm-test-suite/3.6/eg3_6-rules.json");
var jsontron = require('./jsontron.js');

ruleParsedContext = jp.query(schInstance1, "$..prologue.keyword");
console.log(ruleParsedContext);

console.log(ruleParsedContext.length);
console.log(ruleParsedContext[0].length);
//console.log(jp.parent(ruleParsedContext,'$..doc'));
//console.log(jp.query(ruleParsedContext, '$..doc').length);



//console.log(jp.query(ruleParsedContext, "$"));
//console.log(jp.parent(ruleParsedContext,"$..doc"));
//rslt = ruleParsedContext.length == 1 && Object.is(ruleParsedRoot,ruleParsedParent);
//rslt = ruleParsedContext.length == 1 && ruleParsedRoot == ruleParsedParent;
//console.log("The result of comparison is "+ rslt);
//elemenOfParsedContext = ruleParsedContext.length == 1 && jp.query(ruleParsedContext, "$..doc").length>0;

//console.log(elemenOfParsedContext);

jsontron.JSONTRON.validate(schInstance1,mySchRules1,["phaseid1","phaseid2"]);

/*
var argv = require("minimist")(process.argv.slice(2));
console.dir(argv);

var schInstance2 = require(argv.i);
var mySchRules2 = require(argv.r);
var phaseLists2 = argv._;
jsontron.JSONTRON.validate(schInstance2, mySchRules2, phaseLists2); **/
//jsontron.JSONTRON.validate(argv.i, argv.r, argv._);

