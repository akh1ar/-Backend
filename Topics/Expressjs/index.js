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
let port = 8080;
//listen is accpet two parameter
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

/*Handling requests*/
app.use((req,res) =>{
    // console.log(req);
    console.log("request receveid");
    //send request with content-type of text
    res.send("this is basics respose");
    // send request with content-type of josn
    // res.send({
    //     name:"apple",
    //     color:"red",
    // });
})

/*Sending a Response*/
