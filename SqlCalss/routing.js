const express = require("express");
const mysql = require("mysql2");
const app = express();
const path = require("path");
const { faker } = require('@faker-js/faker');
const methodOverride = require("method-override");



app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.set("views",path.join(__dirname,"/views"));
const port = 3000;

let getRandomUser = ()=> {
  return {
    userId: faker.string.uuid(),
  };
}
 

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
  password: "9955",
});

//Fetch & show total number on our app
app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) FROM user`;
  try {
    connection.query(q,(err, result) => {
      if (err) throw err;
      let count =result[0]["COUNT(*)"];
      //pass as a argument 
      res.render("home.ejs",{count});
    });
  } catch (err) {
    console.log(err);
    res.send("Some err in database");
  }
});

// GET/user fetch & show (userId,username,email) of all users
app.get("/users",(req,res) =>{
  let q = `SELECT * FROM USER`;
  try{
    connection.query(q,(err,users)=>{
      if(err) throw err;
      res.render("show.ejs", { users });
    })
  }catch(err){
    console.log(err);
    res.send("SOME ERR HERE");
  }
});

//Edit usrname route using password
app.get("/user/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id ='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  }catch(err){
    console.log(err);
    res.send("SOME ERR HERE");
  }
});

//Update route
app.patch("/user/:id",(req,res)=>{
  let {id} = req.params;
  let {password : formPass, username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id ='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user = result[0];
      if(formPass != user.password){
        res.send("worng password");
      }else{
        let q2 = `update user set username='${newUsername}' Where id='${id}'`;
        connection.query(q2,(err,result)=>{
          if(err) throw err;
          res.redirect("/users");
        });
      }
    });
  }catch(err){
    console.log(err);
    res.send("SOME ERR HERE");
  }
});
app.get("/user/:id/del",(req,res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id ='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user = result[0];
      res.render("del.ejs", { user });
    });
  }catch(err){
    console.log(err);
    res.send("SOME ERR HERE");
  }
});
app.delete("/user/:id",(req,res)=>{
  let {id} = req.params;
  let {password : formPass, username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id ='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user = result[0];
      if(formPass != user.password){
        res.send("worng password");
      }else{
        let q2 = `DELETE FROM user WHERE id='${id}'`;
        connection.query(q2,(err,result)=>{
          if(err) throw err;
          res.redirect("/users");
        });
      }
    });
  }catch(err){
    console.log(err);
    res.send("SOME ERR HERE");
  }
});
app.get("/user/add", (req, res) => {
  res.render("add.ejs");
});

app.post("/user", (req, res) => {
  let { username, email, password } = req.body;
  let userId = faker.string.uuid();
  let q = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;
  connection.query(q, [userId, username, email, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.send("Error adding user");
    }
    res.redirect("/users");
  });
});
//start the Server
app.listen(port, () => {
  console.log(`🔥Listening on PORT: ${port}`);
});
/*Home work problem 
Add POST / user -> new user
Delete /user/:id -> user delete */
