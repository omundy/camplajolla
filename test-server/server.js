// const express = require('express')
// const app = express()
// const port = 3000

// var routes = require('./routes');
// app.use('/', routes);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })



var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'camp_la_jolla'
});
 
connection.connect();
 
connection.query('select * from defense_items', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();