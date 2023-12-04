console.log(2+3);
const fs = require("fs");

// fs.writeFile("message.txt", "Hello Node", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

fs.readFile("message.txt", "utf8", (err, data) => {// UTF8->one of the  type of encoding for result
    // if not mentioned then buffer type will be return
  if (err) throw err;
  console.log(data);
});
// --------------------------------------------------------------------------------------------------------------
// var generateName = require("sillyname");
// import generateName from "sillyName";


// const superheroes = require("superheroes");
// import superheroes from "superheroes";

// const name = superheroes.random();
// console.log(`I am ${name}!`);
