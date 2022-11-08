const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile("./server/server.html", { root: __dirname });
});

app.use((req, res) => {
  res.status(404).sendFile("./404.html", { root: __dirname });
});
app.listen(8080);
