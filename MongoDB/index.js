const mongoose = require('mongoose');

main().then((res)=>{
    console.log("🔥Connection Successfull");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
//Models
const User= mongoose.model('User',userSchema);
// Insert in database
/** 
const user1 = new User({
  name:"Shahnawaz",
  email:"Shahnawaz@mongoDb.com",
  age:48,
});
user1.save();

const user2 = new User({
  name:"Shahnawaz Akhtar",
  email:"Shahnawazakhtar@mongoDb.com",
  age:48,
});
user2.save().then
(res=>{console.log(res)}  
).catch(err=>{console.log(err)}
);
//Insert Many
User.insertMany([
  {name:"Tony",email:"ironman@gmail.com",age:50},
  {name:"Peter",email:"Spiderman@gmail.com",age:25},
  {name:"Steve",email:"Captian@gmail.com",age:85},
  {name:"Bruce",email:"hulk@gmail.com",age:55},
]).then
(res=>{console.log(res)}  
).catch(err=>{console.log(err)}
);
*/
/*Model.find() //return a Query Obejct (thennable)
Mongoose Queries are not promises. But they have a.then()

User.find({age:{$gt: 48}}).then(
  (res)=>{console.log(res[0]);}
).catch(
  (err)=>{console.log(err)}
);

User.findOne({_id:"68a9a1fe61c5205117d1b1ed"}).then(
  (res)=>{console.log(res)}
).catch((err)=>{console.log(err)});

User.findById("68a9a1fe61c5205117d1b1ed").then(
  (res)=>console.log(res)
).catch((err)=>console.log(err));
 */
/*Update : Model.updatOne()

User.updateOne({email:"Shahnawaz@mongoDb.com"},{age:20}).then(
  (res)=>console.log(res)
).catch((err)=>{console.log(err)});

User.updateMany({age:{$gt: 50}},{age:45}).then(
  (res)=>console.log(res)
); */
/*Find and Update 
if true, return the modified document rather than the original
*/
User.findOneAndUpdate({name:"Bruce"},{age:50},{new:true}).then(
  (res)=>console.log(res)
).catch((err)=>console.log(err));

User.deleteOne({age:23}).then(
  (res)=>console.log(res)
).catch((err)=>console.log(err));

User.deleteMany({age:50}).then(
  (res)=>console.log(res)
).catch((err)=>console.log(err));

User.findByIdAndDelete("68a9a462dd42b4b1c800432d").then(
  (res)=>console.log(res)
).catch((err)=>console.log(err));

User.findOneAndDelete({name:"Steve"}).then(
  (res)=>console.log(res)
).catch((err)=>console.log(err));