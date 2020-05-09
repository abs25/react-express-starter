import * as express from "express";

const app = express();

//
// app.get("/", (req, res) => {
//   res.send("Hola Home");
// });

app.use(express.static("./dist/"));

app.get("/something", (req, res) => {
  res.send("This is a page");
});
// Serve index.html for all unknown URLs
app.get("/*", (req, res) => {
  res.sendFile(process.cwd() + "/dist/index.html");
});

app.listen(8000, () => console.log("Running server at port 8000"));
