console.log("hey");
const http = require("http");

const myServer = http.createServer((req, res) => {
console.log('New Req Rec ');
  res.end("hello from Server")
  });
  myServer.listen(8091, () => console.log("server started"));