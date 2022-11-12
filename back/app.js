const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Materiel = require("./models/materiel");
const app = express();

const dbUri =
  "mongodb+srv://robin:robin@schoolmaterialcluster.xhun1xs.mongodb.net/schoolmaterialdb?retryWrites=true&w=majority";

var corsOption = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((r) => app.listen(3001))
  .catch((e) => console.log(e));

app.get("/", cors(corsOption), (req, res) => {
  res.json({ message: "hello" });
});

app.post("/material", cors(corsOption), (req, res) => {
  console.log(req.body);
});
app.get("/add-materiel", cors(corsOption), (req, res) => {
  console.log("ma requette", req);
  const item = new Materiel({
    name: "mon matos 2",
    description: "il s'appelle reviens",
  });

  item
    .save()
    .then((r) => {
      res.send(r);
    })
    .catch((e) => console.log("y a un souci", e));
});

app.get("/all-materiel", cors(corsOption), (req, res) => {
  Materiel.find()
    .then((r) => {
      res.send(r);
    })
    .catch((e) => console.log("cannot find", e));
});
app.get("/single-materiel", (req, res) => {
  Materiel.findById("636e4b51e9b21bbea489da74")
    .then((r) => {
      res.send(r);
    })
    .catch((e) => console.log("cannot find", e));
});
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
