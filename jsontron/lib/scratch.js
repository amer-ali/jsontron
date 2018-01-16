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
var schInstance1 = require("../data/ibm-test-suite/4.5/eg4_5_bad1.json");
var mySchRules1 = require("../data/ibm-test-suite/4.5/eg4_5-rules.json");
var jsontron = require('./jsontron.js');

contextNode = jp.query(schInstance1, "$..doc");
console.log(contextNode);

//contextNodeN = jp.nodes(schInstance1, "$..[?(@.prologue)]");
//console.log(contextNodeN);


//military = (jp.query(contextNode, '$..[?(@.email=="okey.agu.navy.mil")]'));
link = (jp.query(contextNode, '$..[?(@.prologue)]')).length > 0 ;
console.log(link);
//console.log(contextNode[0].length);
//allowedChild = contextNode[0] in ['member', 'email','name','bio','affiliation'];
//console.log(allowedChild);
//console.log(jp.query(contextNode, '$..[?(@.name || @.bios || @.affiliations)]'));
//console.log(jp.query(contextNode, '$.*[?(@.name || @.bio || @.affiliation)]'));
//children = jp.query(contextNode, '$.*[?(@.length)]');
//children = contextNode.length == 1 && jp.query(contextNode, '$..name[0]') !=null && jp.query(contextNode, '$..bio[0]') !=null && jp.query(contextNode, '$..affiliation[0]') !=null ;
//console.log(children);

//console.log(children.length);
//email = (jp.query(ruleParsedContext, "$..email")).length > 0;
//console.log(email);
//member = (jp.query(ruleParsedContext, "$..member")).length >0 && (jp.query(ruleParsedContext, "$..member"))[0]== 'yes';
//member = (jp.query(ruleParsedContext, "$..member"))[0].length > 0 && ((jp.query(ruleParsedContext, "$..member"))[0] == ('yes')||(jp.query(ruleParsedContext, "$..member"))[0] == ('no'));
//member = ('member' in ruleParsedContext[0])&& ((jp.query(ruleParsedContext, "$..member"))[0] == ('yes')||(jp.query(ruleParsedContext, "$..member"))[0] == ('no'));
//console.log(('member' in ruleParsedContext[0]))
//console.log(member);
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

