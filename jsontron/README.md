# jsontron

Schematron based JSON Semantic Validator.
JSON Semantic Rules Engine.

## Installation
$ npm -i jsontron


## Usage: Command Line 


	//go to the lib folder of jsontron modules
	
	$ cd $JSONTRON_ROOT/lib
	 
	//run JSONValidator with instance doc, rules doc and optional phase list
	//#ALL and #DEFAULT are special key words meant to invoke all or default phases respectively
	
	$ node JSONValidator.js -i {instance doc} -r { rules doc} [#ALL | #DEFAULT | Phase List]
	
	//example
	$ cd ../node_modules/jsontron/lib
	$ node JSONValidator.js -i ../data/dissertation/loandata.json -r ../data/dissertation/phase/loandat-rulees_dissertation_singlePhase.json


### Output
    Parsing Pattern: patternid1
    1 Pattern(s) Requested.
    1 Pattern(s) Processed.
    0 Pattern(s)  Ignored.
    Report {
      errors: [],
      warnings: [],
      validations:
        [ { schRule: [Object],
           ruleContext: [Object],
           assertionid: 'assertidFHA21',
           assertionTest: 'jp.query(contextNode,\'$..amount\') <= 500000',
           message: 'successful',
           assertionValid: true } ] }
     true
     **** THIS INSTANCE IS SEMANTICALLY VALID ****




## Usage: Inside other modules/scripts


	
	
	var jsontron = require("jsontron");
	
	myInstance = { "doc": {} };
	myRules = {
	"schema":{
	"id":"eg3_1",
	"title":"Technical document schema",
	"schemaVersion":"ISO Schematron 2016",
	"queryBinding":"jsonpath",
	"defaultPhase":"phaseid1",
	 "phase":[
    	{
    		"id":"phaseid1",
    		"active":["Document_root"]
    	}
    ], 
	"pattern":[
      {
      	"id":"Document_root",
      	"title":"pattern title",
      	"rule":[
          {          
              	"id":"doc_root",
              	"abstract":false,
                "context": "$",
                "assert":[
                  {
                     "id":"doc_root_assert",
                     "test":"contextNode.length ==1 && contextNode[0] == jp.parent(contextNode, '$..doc')",
                     "message": "Root element should be 'doc'."
                  }
                ]              
          }]}]}};
          
          
    jsontron.JSONTRON.validate(myInstance, myRules);
    
    


## Examples: Using IBM Examples from Command Line 


	//IBM Schematron examples translated from XML to JSON are bundled with the module in data/ibm-test-suite folder
	
	// Below is an example using IBM Example 3.1
	
	$ node JSONValidator.js -i ..\data\ibm-test-suite\3.1\eg3_1_good1.json -r ..\data\ibm-test-suite\3.1\eg3_1-rules.json
	
### Output

    Parsing Pattern: Document_root
	 1 Pattern(s) Requested.
    1 Pattern(s) Processed.
    0 Pattern(s)  Ignored.
     Report {
       errors: [],
       warnings: [],
       validations:
          [ { schRule: [Object],
           ruleContext: [Object],
           assertionid: 'doc_root_assert',
           assertionTest: 'contextNode.length ==1 && contextNode[0] == jp.parent(contextNode, \'$..doc\')',
           message: 'successful',
           assertionValid: true } ] }
    true
    **** THIS INSTANCE IS SEMANTICALLY VALID ****
    
	 
