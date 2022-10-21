const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request done");
});

server.listen(3001, () => {
  console.log("connection faite");
});
