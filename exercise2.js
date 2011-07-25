var http = require('http');

var connection = http.createClient(80, 'nytimes.com');
var request = connection.request("GET", '/');

request.on("response", function(response) {
  var response_body = "";
  response.on("data", function(chunk) {
     console.log('BODY: ' + chunk);
  });
  response.on("end", function() {
    console.log('END');
  });
});

request.write('');
request.end();
