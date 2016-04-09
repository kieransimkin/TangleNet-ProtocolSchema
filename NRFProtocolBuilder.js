#!/usr/bin/node
var fs = require('fs');
var util = require('util');
var xml4js = require('xml4js');
var request = require('request');
var schema = fs.readFileSync('NRFProtocol.xsd', {encoding: 'utf-8'});
var xml = fs.readFileSync('NRFProtocol.xml', {encoding: 'utf-8'});
//request.post({url:'https://validator.w3.org/nu/?out=json',headers: {'Content-Type':'text/xml; charset=utf-8'},body: schema},function(err,httpResponse,body){ console.log(body); });
//request.post({url:'https://validator.w3.org/nu/?parser=xml&out=xml&laxtype=yes',headers: {'Content-Type':'text/xml; charset=utf-8'},body: xml},function(err,httpResponse,body){ console.log(body); });
//request.post({url:'https://validator.w3.org/nu/?schema=http://slinq.com/NRFProtocol.xsd&parser=xml&out=xml&laxtype=yes',headers: {'Content-Type':'text/xml; charset=utf-8'},body: xml},function(err,httpResponse,body){ console.log(body); });

request.post({url:'https://validator.w3.org/nu/?out=xml&schema=http://raw.githubusercontent.com/kieransimkin/TangleNet-ProtocolSchema/master/NRFProtocol.xsd&laxtype=yes',headers: {'Content-Type':'text/xml; charset=utf-8'},body: xml},function(err,httpResponse,body){ console.log(body); });
//request.post({url:'https://validator.w3.org/nu/?parser=xml&out=json&schema=http://slinq.com/NRFProtocol.xsd&laxtype=yes',headers: {'Content-Type':'text/xml; charset=utf-8'},body: xml},function(err,httpResponse,body){ console.log(body); });


//request.post({url:'https://validator.w3.org/nu/?parser=xml&out=json&schema=http://raw.githubusercontent.com/kieransimkin/TangleNet-ProtocolSchema/995b181adb07d6f9ce6692ca537b2d8bbb87d931/NRFProtocol.xsd&laxtype=yes',headers: {'Content-Type':'text/xml; charset=utf-8'},body: xml},function(err,httpResponse,body){ console.log(body); });
//request.post({url:'https://validator.w3.org/nu/?parser=xml&out=json&laxtype=yes',headers: {'Content-Type':'text/xml; charset=utf-8'},body: xml},function(err,httpResponse,body){ console.log(body); });
var parser = new xml4js.Parser({ downloadSchemas: false,xmlns: false});
parser.addSchema('http://dealing.ninja/NRFProtocol', schema, function (err, importsAndIncludes) {
	console.log(err);
    // importsAndIncludes contains schemas to be added as well to satisfy all imports and includes found in schema.xsd
    parser.parseString(xml, function (err, result) {
	    console.log(err);
	    console.log(result);
        console.log(util.inspect(result, false, null));
    });
});

