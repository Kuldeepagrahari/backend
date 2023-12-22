import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  next();
}
/* `app.use(passwordCheck);` is adding a middleware function called `passwordCheck` to the Express
application. Middleware functions in Express are functions that have access to the request (`req`)
and response (`res`) objects, and the `next` function in the application's request-response cycle. */
app.use(passwordCheck);

/* The code `app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});` is defining a route handler for the root URL ("/") using the HTTP GET method. */
app.get(/* `"/", (req, res)` is defining a route handler for the root URL ("/") using the HTTP GET
method. */
"/", (req, res) => {
  res.sendFile(/* `__dirname` is a special variable in Node.js that represents the directory name of
  the current module. In this code, `__dirname` is used to construct the file path for
  serving static files. It is used with the `path` module's `dirname` function and the
  `url` module's `fileURLToPath` function to get the directory name of the current
  module's file URL. This ensures that the correct file path is used regardless of the
  current working directory. */
  __dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
    //Alternatively res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
