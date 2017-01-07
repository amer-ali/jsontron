/**
 * 
 */
	var JSV = require("JSV").JSV;
	//alert("Bismillah Karaan 2");
	console.log("step 1");
	var json = {};
	var schema = {"type" : "object"};
	var env = JSV.createEnvironment();
	var report = env.validate(json, schema);
	console.log("step 2");
	if (report.errors.length === 0) {
	    //JSON is valid against the schema
		//alert("Bismillah Karaan3");
		console.log("No Errors Found!");
	}
	console.log(report);
	console.log("step done with Example1 !");
	
	function trueOrfalse(number){
		
		return number *number ;};
	
	report = env.validate({ a : 1 }, { type : 'object', properties : { a : { type : 'string' }} });
	console.log(report);