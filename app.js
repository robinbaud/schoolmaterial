const express = require("express");

const app = express();
app.listen(3001);

app.get("/", (req, res) => {
  res.sendFile("./src/App.js", { root: __dirname });
});

app.use((req, res) => {
  res.status(404).sendFile("./404.html", { root: __dirname });
});
