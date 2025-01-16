const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shop",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected to database");
});

module.exports = connection;
