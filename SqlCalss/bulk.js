const { faker } = require("@faker-js/faker");
// Get the client
const mysql = require("mysql2");

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
let data = [];
for (let i = 1; i <= 100; i++) {
  data.push(getRandomUser());
}

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
  password: "9955",
});

let QUERY = "INSERT INTO user (id, username, email, password) VALUES ?";

try {
  connection.query(QUERY, [data], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}