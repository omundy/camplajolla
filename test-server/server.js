// const express = require('express')
// const app = express()
// const port = 3000

// var routes = require('./routes');
// app.use('/', routes);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

var dotenv =require('dotenv')
dotenv.config()
// console.log(process.env.DB_PASS); 

var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : process.env.DB_PASS,
  database : 'camp_la_jolla'
});
 
connection.connect();
 
connection.query('select * from defense_items', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();