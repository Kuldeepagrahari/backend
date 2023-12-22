import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

/* `const __dirname = dirname(fileURLToPath(import.meta.url));` is used to get the directory name of
the current module file. */
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

/* The code `app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});` is setting up a route for the root URL ("/") of the application. When a GET request is made to
the root URL, the server will respond by sending the "index.html" file located in the "public"
directory. */
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

/* The code `app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>✌️</h2>`);
});` is setting up a route for the "/submit" URL of the application. When a POST request is made to
the "/submit" URL, the server will respond by sending an HTML response that includes the band name
generated by the `bandNameGenerator` middleware function. The band name is displayed in an `<h2>`
element with a peace sign emoji. */
app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});