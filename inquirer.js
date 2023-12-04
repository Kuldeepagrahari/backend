import inquirer from 'inquirer';
import QRCode from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {"message":"write your url","name":"URL"}
    /* Pass your questions in here */
  ])
  .then((answers) => {
//    console.log(answers);
   const url=answers.URL;

   var qr_svg = qr.image(url);
   qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    
//    var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
})
    // Use user feedback for... whatever!!
//   }
  
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });