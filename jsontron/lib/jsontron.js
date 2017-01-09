module.exports = require('../node_modules/jsonpath/lib/index');
 /* var cities = [
	  { name: "London", "population": 8615246 },
	  { name: "Berlin", "population": 3517424 },
	  { name: "Madrid", "population": 3165235 },
	  { name: "Rome",   "population": 2870528 }
	];

	var jp = require('jsonpath');
	var names = jp.query(cities, '$..name');
console.log(names);

**/

var jp = require('jsonpath');

var schTRON = require("../data/schematron-instance-minimal-complex.json");
console.log(schTRON);

var phases = jp.query(schTRON, '$..phase[1].active');
var pattern2 = jp.query(schTRON, '$..pattern');

console.log(phases);
console.log(pattern2);



