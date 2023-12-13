(async function () {
  var MySQLData = require('./mysql-data.js')
  let data = await MySQLData.getData()
  console.log(data)
})()

// module.exports = (function() {
//     'use strict';
//     var routes = require('express').Router();

//     routes.get('/', function (req, res) {
//         res.send('Hello ExternalRoutes!');
//     });
//     routes.get('/data', async function (req, res) {
//         let data = await MySQLData.getData()
//         res.send(data);
//     });

//     return routes;
// })();
