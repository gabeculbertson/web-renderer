var page = require('webpage').create();
var fs = require('fs');

console.log(fs.read('sample.html'));
page.content = fs.read('sample.html');
//'<html><head></head><body><p>Hello world</p></body></html>';
page.render('colorwheel.png');
phantom.exit();