import express from "express";

const app = express();
const port = 3000;
function logger(req,res,next){
  console.log("req method: ",req.method)
  console.log("req url: ",req.url);
  /* In the given code, `next()` is a function that is used to pass control to the next middleware
  function in the request-response cycle. */
  /* In the given code, `next()` is a function that is used to pass control to the next middleware
  function in the request-response cycle. It is typically used to move the execution flow to the
  next middleware function after the current middleware function has completed its task. */
  next();
  //important
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
