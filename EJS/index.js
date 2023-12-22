import express  from "express";

const app=express();
const port = 3000;
// app.get("/",(req,res)=>{
//     const today=new Date()
//     const day=today.getDay();
//     let type="a weekday";
//     let adv="its time to work hard"
//     // console.log(day)
//     if(day===0 || day===6){
//          type="a weekend";
//          adv="its time to relax"
//     }
//     res.render("index.ejs", {
//         dayType:type,
//         advice:adv
//     })
// })
app.get("/",(req,res)=>{
   const data={
    title:"EJS tags",
    seconds:new Date().getSeconds(),
    items:["sam","sam2","sam3"],
    html:"<em>this is some em text</em>",
   }
//   if(data.seconds%2!=0){
//     // console.log(data.seconds)
//     data.items=["no item to display"]
//   }
    res.render("index2.ejs", data)
})
app.listen(port, ()=>{
    console.log(`server on ${port}`);
})

