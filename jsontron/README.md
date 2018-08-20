# jsontron

Schematron based JSON Semantic Validator.
JSON Semantic Rules Engine.

## Installation
$ npm -i jsontron


## Command Line Usage

	var JSV = require("./jsv").JSV;
	var json = {};
	var schema = {"type" : "object"};
	$ cd $JSONTRON_ROOT/lib
	
	$ node JSONValidator.js -i {instance doc} -r { rules doc} [#ALL | #DEFAULT | Phase List]
	
	$ node JSONValidator.js -i ../data/dissertation/loandata.json -r ../data/dissertation/phase/loandat-rulees_dissertation_singlePhase.json


