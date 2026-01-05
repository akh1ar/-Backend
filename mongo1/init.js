const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
   .then(()=>{
    console.log("connection successful");
   })
   .catch((err)=>console.log(err));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
let allChats = [
    {
        form: "Saif",
        to:  "irfan",
        msg: "Congurations for Placement",
        created_at: new Date()
    },
    {
        form: "irfan",
        to:  "Saif",
        msg: "thanks Bhai",
        created_at: new Date()
    },
    {
        form: "Shahnawaz",
        to:  "Sahail",
        msg: "Pass Ho gaya",
        created_at: new Date()
    },
    {
        form: "Sahail",
        to:  "Shahnawaz",
        msg: "Nahii Bhai",
        created_at: new Date()
    },
    {
        form: "Irfan",
        to:  "Shahnwaz",
        msg: "Code bhej Portfolio ka",
        created_at: new Date()
    },
    {
        form: "Shahnawaz",
        to:  "Irfan",
        msg: "Bhej Deiya check email",
        created_at: new Date()
    },
    {
        form: "Zeeshan",
        to:  "Shahnawaz",
        msg: "Bhai Laptop on nahii ho rha ha",
        created_at: new Date()
    },
    {
        form: "Zeeshan",
        to:  "Shahnawaz",
        msg: "Direct off ker on ker",
        created_at: new Date()
    },
    {
        form: "Sib",
        to:  "Shahnawaz",
        msg: "Okhla aa rha ho",
        created_at: new Date()
    },
    {
        form: "Shahnawaz",
        to:  "Sib",
        msg: "Nahii bhai aaj kuch kam ha",
        created_at: new Date()
    },
    {
        form: "Sahail",
        to:  "Asad",
        msg: "Aa gaya londe",
        created_at: new Date()
    },
    {
        form: "Asad",
        to:  "Sahail",
        msg: "HH bhai aa gyaa JNU hu abhi",
        created_at: new Date()
    },
];
Chat.insertMany(allChats);
