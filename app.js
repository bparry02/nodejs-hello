const http = require('http');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

var os = require("os");
var hostname = os.hostname();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello World from ${hostname}\n`);
});

server.listen(port, ip, () => {
  console.log(`Server running at http://${ip}:${port}/`);
});
