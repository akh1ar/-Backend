const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
//parsh the data to get url (req.body)
app.use(express.urlencoded({extended:true}));
main()
   .then(()=>{
    console.log("connection successful");
   })
   .catch((err)=>console.log(err));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//Index Route
app.get("/chats",async(req,res)=>{
    let chats = await Chat.find();
    res.render("index.ejs",{chats});
});
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/chats",(req,res)=>{
    let{from,to,msg}=req.body;
    let newChat = new Chat({
        form: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    newChat
    .save()
    .then((res)=>{
        console.log("Chat was Saved");
    })
    .catch((err)=>{
        console
    })
    res.redirect("/chats");
});
app.get("/",(req,res)=>{
    res.send("working root");
});
app.listen(8080,()=>{
    console.log("app is Listening on port 8080");
});