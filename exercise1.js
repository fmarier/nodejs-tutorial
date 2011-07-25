var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  user_agent = req.headers['user-agent'];
  if (user_agent.match('Firefox')) {
      res.end('<h1>I\'m learning Node on a freedom-loving browser: ' + user_agent + '</h1>\n');
  }
  else {
      res.end('<h1>I\'m learning Node on another browser: ' + user_agent + '</h1>\n');    
  }
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');
