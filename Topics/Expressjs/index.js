/*Library v/s Framework
library: A libraray is a collection of pre-written code that can be used to perform specific tasks.
e.g - axios

Framework: A framework is a set of pre-wriiten code that provides a structure for developing software appliction

eg- express

express: A nodeJS web application framework that helps us to make applications It is used for server side programming.
*/

const express = require("express");
const app = express();
// console.dir(app);
/*Port are the logical endpoints of a network connection that is used to exchange information between a web server and a web client. */
let port = 3000;
//listen is accpet two parameter
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

/*Handling requests*/
// app.use((req,res) =>{
//     /*Sending a Response
//     res.send is used to send the request from our server*/
//     console.log("request recevied");
//     //send request with content-type of text
//     res.send("this is basics respose");
// });

/**Routing
 it is process of selecting a path for traffic in a network or between or across multiple networks.
*/
app.get("/",(req,res)=>{
    res.send("You connected root path");
});
app.get("/obj",(req,res)=>{
    // send request with content-type of josn
    res.send({
        name:"apple",
        color:"red",
    });
});

app.get("/html",(req,res)=>{
    //send html contntent
    let code  = `<h1>Shahnawaz</h1><ul><li>code</li><li>sleep</li></ul>`
    res.send(code);
});

//when this valid routes is not define when enter the worng path give error 400 page not found
app.get("*",(req,res)=>{
    res.send("this path is not vaild");
});

app.post("/",(req,res)=>{
    res.send("you conncted root for post method");
});

//read about routing get and post method