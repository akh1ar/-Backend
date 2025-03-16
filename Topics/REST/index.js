/*Express Server Confguration*/
const express = require("express");
const app = express();
const port = 3000;

//uderstand the enconded data
app.use(express.urlencoded({ extends: true }));
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//using to link public to apply css
app.use(express.static(path.join(__dirname, "public")));

/*Index Route*/
let posts = [
  
  {
    id: "1a", //Implement: GET/posts/:id 
    username: "Shahnawaz",
    content: "I love coding",
  },
  {
    id: "2b",
    username: "Irfan",
    content: "Nothing to do",
  },
  {
    id:"3c",
    username: "Irfan",
    content: "I got everthing",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

/*Create & New Route - Implement:POST:posts
Cetate Route POST /posts to add a new post

2 routes 
.serve the from  GET  /posts/new
.Add the new post POST / posts
*/

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  posts.push({ username, content });
  /*Redirect - res.redirect(URL) */
  res.redirect("/posts");
});

/*Implement: GET/posts/:id - Show Route
GET /posts/:id  - to get one post (using id) */

app.get("/posts/:id", (req, res) => {
  let {id} = req.params;
  //find the posts using of id
  let post = posts.find((p)=> id  === p.id);
  res.render("show.ejs",{post});
  res.send("request working");
});
app.listen(port, () => {
  console.log(`Listening ON PORT : ${port}`);
});
