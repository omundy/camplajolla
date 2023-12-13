// test var
// export let info = 'Get data from MySQL, export for pages & posts'

// test data export
// export async function getData() {
//   const data = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
// }

var mysql = require('nodejs-mysql')

exports.getName = () => {
  return 'Jim'
}

exports.getData = async () => {
  // single database connection
  const config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'camp_la_jolla',
  }

  const db = mysql.getInstance(config)
  let data
  await db
    .exec('select * from defense_items')
    .then((rows) => (data = rows))
    .catch((err) => console.warn(err))
  return data
}

