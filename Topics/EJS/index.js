/*Templating
EJS (Embedded JavaScript templates)
EJS is a simple templating language that lets you generate HTML markup with plain JavaScript*/

const express = require("express");
const app = express();
/**views dir set */
const port = 3000;
app.listen(port, () => {
  console.log(`Listing on port ${port}`);
});

const path = require("path");
/*why here is no need to require a ejs because ejs is auto require by the express js*/
app.set("view engine", "ejs");
/*using to server strat anywere ejs templete is accesable */
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {
  /*Here use the render to send the ejs file 
    when here start th server in same dir then work*/
  res.render("home.ejs");
});
app.get("/hello", (req, res) => {
  /*This is route is create to check the server on in another dir */
  res.send("hello");
});

/*Interpolation Syntax
Interpolation refers to embedding expressions into marked up text
check out home.ejs*/

/*Passing data to EJS */

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceVal });
});

/*Activity of Create a Instagram route for different pages*/
/* Here is using Path Parameters */
// app.get("/ig/:username",(req,res)=>{
//   const followers =["saif","Shahil","Irfan"];
//   let {username} = req.params;
//   res.render("instagram.ejs",{username,followers});
// });

/*Conditional Statement
eg: roll dice if esle <%%>*/

/*Loops
eg: followers in instagram*/

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));


//Here is using the Json data in EJS
app.get("/ig/:username", (req, res) => {
  let {username} = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  //check data validtion
  if(data){
    res.render("instagram.ejs",{data});
  }else{
    res.render("instaDataErr.ejs",{username});
  }
});

/*Includes
using add sub templates (templates inside templates*/
