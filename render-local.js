var page = require('webpage').create();

var settings = {
  encoding: "utf8"
};

page.open('http://localhost:8080/sample.html', settings, function(status) {
	if (status !== 'success') {
        console.log('Unable to load the address!');
    } else {
        var height = page.evaluate(function(){
            return document.getElementById('wrapper').offsetHeight;
        }); 
        var width = page.evaluate(function(){
            return document.getElementById('wrapper').offsetWidth;
        }); 
        console.log('Crop to: '+width+"x"+height);

        page.clipRect = { top: 0, left: 0, width: width + 8, height: height + 8 };
        window.setTimeout(function () {
            page.render("tmp.png");
            phantom.exit();
        }, 200);
    }
});