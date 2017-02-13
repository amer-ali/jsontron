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

testErrorReport('blah', 'blunk');