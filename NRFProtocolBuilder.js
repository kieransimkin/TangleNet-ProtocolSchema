#!/usr/bin/node
var fs = require('fs');
var util = require('util');
var xml4js = require('xml4js');

var schema = fs.readFileSync('NRFProtocol.xsd', {encoding: 'utf-8'});
var xml = fs.readFileSync('NRFProtocol.xml', {encoding: 'utf-8'});
var parser = new xml4js.Parser({ downloadSchemas: false,xmlns: false});
parser.addSchema('http://dealing.ninja/NRFProtocol', schema, function (err, importsAndIncludes) {
	console.log(err);
    // importsAndIncludes contains schemas to be added as well to satisfy all imports and includes found in schema.xsd
   /* 
    parser.parseString(xml, function (err, result) {
	    console.log(err);
	    console.log(result);
        console.log(util.inspect(result, false, null));
    });// */
});

