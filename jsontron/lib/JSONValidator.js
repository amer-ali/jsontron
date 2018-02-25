

//var schInstance1 = require("../data/loandata.json");
//var mySchRules1 = require("../data/loandata-rules.json");

var jsontron = require('./jsontron.js');

//jsontron.JSONTRON.validate(schInstance1,mySchRules1,["phaseid1","phaseid2"]);


 var argv = require("minimist")(process.argv.slice(2));
console.dir(argv);

var schInstance2 = require(argv.i);
var mySchRules2 = require(argv.r);
var phaseLists2 = argv._;
jsontron.JSONTRON.validate(schInstance2, mySchRules2, phaseLists2);




 