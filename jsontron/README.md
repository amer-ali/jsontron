# jsontron

Schematron based JSON Semantic Validator.
JSON Semantic Rules Engine.

## Installation
$ npm -i jsontron


## Command Line Usage


	//go to the lib folder of jsontron modules
	$ cd $JSONTRON_ROOT/lib 
	// run JSONValidator with instance doc, rules doc and optional phase list
	//#ALL and #DEFAULT are special key words meant to invoke all or default phases respectively
	$ node JSONValidator.js -i {instance doc} -r { rules doc} [#ALL | #DEFAULT | Phase List]
	
	//example
	$cd ../node_modules/jsontron
	$ node JSONValidator.js -i ../data/dissertation/loandata.json -r ../data/dissertation/phase/loandat-rulees_dissertation_singlePhase.json


