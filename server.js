var page = require('webpage').create();

var settings = {
  encoding: "utf8"
};

page.open('http://localhost:8080/sample.html', settings, function(status) {
	var webserver = require('webserver');
	var server = webserver.create();
	var service = server.listen(8081, function(request, response) {
		// response.statusCode = 200;
		// response.write('<html><body>Hello!</body></html>');
		// response.close();
		var time = new Date().getTime();
		console.log(request.post.text);

		var text = request.post.text;
		page.evaluate( function(text) {
		  	document.getElementById('wrapper').innerHTML = text;
			 // request.post.text;
			return null;
		}, text);

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
	        var now = new Date().getTime();
	        var ellapsed = now - time;
	        console.log('ellasped:' + ellapsed);
        }, 10);
	});
});