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

// A simple SHOW query
let q = "SHOW TABLES";
let q1 ="INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
let user = ["123","123_newuser","new@gmail.com","123"];
try{
  connection.query(q1, user, (err,result)=>{
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
