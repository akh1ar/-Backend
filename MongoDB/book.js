const mongoose = require('mongoose');

main().then((res)=>console.log("🔥Connection Successfull"))
.catch((err)=>console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/uni');
}

const bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
    },
    price:{
        type: Number,
    },
});

const Book = mongoose.model('Book',bookSchema);

let book1 = new Book({
    /*Book validation insure title is nessary not enter give the err */
    // title:"Physics",
    author:"Harper Lee",
    price: "1300",
    // price: 1300,
});

book1.save().then((res)=>console.log(res)
).catch((err)=>console.log(err));