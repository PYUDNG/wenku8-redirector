var http = require("http");
var url = require("url");

start();

function start() {
  function onRequest(request, response) {
    const recieved_url = url.parse(request.url);
    const pathname = recieved_url.pathname;
    const query = recieved_url.query;

    const target = pathname.replace(/^\//, '').replace(/\.(jpg|png|jpeg)$/, '');
    console.log("Request for " + pathname + " received. Redirecting to " + target);
    response.writeHead(302, {"Location": target});
    response.end();
  }
 
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}
 
exports.start = start;