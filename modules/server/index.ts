import * as express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hola Home");
});

app.listen(8000, () => console.log("Running server at port 8000"));
