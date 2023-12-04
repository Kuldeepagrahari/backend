// var generateName = require('sillyname');
import generateName from "sillyname";
import superheroes from "superheroes";
var sillyName = generateName();
console.log(`My name is ${sillyName}.`);
 // "type":"module" in json ->added later for accessing "import"
// to install any package->go npm.js copy that command paste in terminal hit enter
import generateHero from "superheroes";
var superHero=superheroes.random();
console.log(`i am  ${superHero}!.`);