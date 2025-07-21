const { faker } = require('@faker-js/faker');
let getRandomUser = ()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), 
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

// console.log(getRandomUser()); 

/*MYSQL2 package
TO connect NOde with MySQL
connection.end() //to close connection */
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: '9955',
});

// Inser into user
let q = "SHOW TABLES";
let q1 ="INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
let user = ["123","123_newuser","new@gmail.com","123"];

let multiquery = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [["123a","123_newuser_a","new@gmail.com_a","123a"],
             ["123b","123_newuser_b","new@gmail.com_b","123b"],
             ["123c","123_newuser_c","new@gmail.com_c","123c"]
            ];
try{
  connection.query(multiquery, [users], (err,result)=>{
  if(err)throw err;
  console.log(result);
  console.log(result.length);
  console.log(result[0]);
  console.log(result[1]);
  })
}catch(err){
  console.log(err);
}
//to close connection
connection.end();
