var Jasmine = require('jasmine');
var jasmine = new Jasmine();

// use either config file
//jasmine.loadConfigFile('spec/support/jasmine.json');

// or config object

jasmine.loadConfig({
    spec_dir: 'jasmine_examples/spec',
    spec_files: [
        '*Spec.js',
        'ibm-test-suite/**/*[sS]pec.js',
        //'utils/**/*[sS]pec.js'
    ],
    helpers: [
        'helpers/**/*.js'
    ],
    
    random: false
});


jasmine.configureDefaultReporter({
    // The `timer` passed to the reporter will determine the mechanism for seeing how long the suite takes to run.
    //timer: new jasmine.jasmine.Timer(),
    // The `print` function passed the reporter will be called to print its results.
    //print: function() {
       // process.stdout.write(arguments);
    //},
    // `showColors` determines whether or not the reporter should use ANSI color codes.
    showColors: true
});


// execute the tests

jasmine.execute();

//execute can optionally be called with a list of spec file paths to execute relative to your project root and a string to filter by spec name.

//jasmine.execute(['jsontron.js'], 'a spec name');