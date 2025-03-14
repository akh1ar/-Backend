const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Listing on port: ${port}`);
});

app.get("/register", (req, res) => {
  //Handling Get requests
  let { user, pass } = req.query;
  res.send(`Standard GET response  Welcome : ${user}`);
});
/*req.body not a readable format  for express so route the data
Set up POST request route to get some response
  Parse POST request data*/
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.post("/register", (req, res) => {
  /*Handling POST requests*/
  let { user, pass } = req.body;
  res.send(`Standard POST response  Welcome : ${user}`);
});
