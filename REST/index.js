const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");



// Middleware to parse JSON and URL-encoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //Added this to parse JSON requests

// Set up EJS and static files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

//override with Post  having ?_method=DELETE
app.use(methodOverride("_method"));

// Sample Posts Data
let posts = [
  { id: uuidv4(), username: "Shahnawaz", content: "I love coding" },
  { id: uuidv4(), username: "Irfan", content: "Nothing to do" },
  { id: uuidv4(), username: "Irfan", content: "I got everything" },
];

// Routes - Main
app.get("/posts", (req, res) => res.render("index.ejs", { posts }));

//Routes - new posts
app.get("/posts/new", (req, res) => res.render("new.ejs"));
app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

//Routes - view Posts
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  res.render("show.ejs", { post });
});


//Routes - Edit Post
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  post.content = req.body.content;
  res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
  let {id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs",{post});
});

//Destroy Route
app.delete("/posts/:id",(req,res)=>{
  let {id}= req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect('/posts');
});

// Start Server
app.listen(port, () => console.log(`🔥Listening on PORT: ${port}`));

//8.15
