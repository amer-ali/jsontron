# jsontron

Schematron based JSON Semantic Validator.
JSON Semantic Rules Engine.


## Installation
$ npm  i  jsontron



&nbsp;&nbsp; Note: If you have not installed node and npm. Please follow instructions at below site to install node and npm<br/>&nbsp;&nbsp; [docs.npmjs.com/getting-started/installing-node](https://docs.npmjs.com/getting-started/installing-node#installing-npm-from-the-nodejs-site).

## Usage at terminal

Command Lines:

```sh
	#go to the bin folder of jsontron module
	
	cd $JSONTRON_ROOT/bin
	 
	//run JSONValidator with instance doc, rules doc and optional phase list
	//#ALL and #DEFAULT are special key words meant to invoke all or default phases respectively
	
	
	node JSONValidator -i {instance doc} -r { rules doc} [#ALL | #DEFAULT | Phase List] [-d]
	
	# where:
	# i is json instance document to be validated
	# r is rules file
	# #ALL | #DEFAULT | Phase list  specifies the phase (s)
	# d is to enable debug
	 
	# alternatively you can set an environment variable for JSONValidator like below
	# in Windows
	 
	set JSONValidator = $JSONTRON_ROOT/bin/JSONValidator

	# Example
	cd ../node_modules/jsontron/data/dissertation/phase
	node %JSONValidator% -i loandata.json -r loandat-rulees_dissertation_singlePhase.json
```

Output:
```
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
```

## Usage inside other modules/scripts

```js
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
          
          
    //without phase
    var myReport = jsontron.JSONTRON.validate(myInstance, myRules);
    var valid = myReport.valid;
    
    //with phase
    var myReport = jsontron.JSONTRON.validate(myInstance, myRules, ['phaseid1']);
    var valid = myReport.valid;
    [Note: the phase(s) have to be in array format like ['phaseid1'] or ['phaseid2'] or ['phaseid1', 'phaseid2'] or ['#DEFAULT']   ]
```

## Example - Using IBM Examples from Command Line 

```sh
        # IBM Schematron examples translated from XML to JSON are bundled with the module in data/ibm-test-suite folder
	# Below is an example using IBM Example 3.1
	
	cd $JSONTRON_ROOT\data\ibm-test-suite\3.1
	
	node JSONValidator -i eg3_1_good1.json -r eg3_1-rules.json
```

Output:

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

## How to contribute and participate!

**`jsontron`** is a "standard under construction" open to anyone interested in  testing, enhancements, add new issues, add examples, documentation, etc.

We welcome contributions from everyone, and there are many ways to contribute, from Github issues and pull requests, to contribution to our monthly teleconferences.

We welcome contributions from everyone, and there are many ways to contribute, the main channel at this moment is the [Github issues](https://github.com/amer-ali/jsontron/issues)  and pull requests.


