// test var
// export let info = 'Get data from MySQL, export for pages & posts'

// test data export
// export async function getData() {
//   const data = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
// }

// note - neither of these would work inside Astro
// https://www.npmjs.com/package/mysql
// https://www.npmjs.com/package/nodejs-mysql

// only this one worked with Astro, using async operations
// https://www.npmjs.com/package/mysql2
import mysql from 'mysql2/promise'

// database connection
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'camp_la_jolla',
})

export async function getData() {
  const [results, fields] = await connection.execute('SELECT * FROM `defense_items`')
  //   console.log(results[0].title)
  //   console.log(results)
  return results
}

export async function getDefensonomy() {
  const [r, fields] = await connection.execute(
    'SELECT id,slug,title,cat1,cat2,cat3,cat4 FROM defense_items ORDER BY cat1 ASC, cat2 ASC, cat3 ASC,cat4;'
  )
  // console.log(r);

  // populate and return the elements prop of a cytoscape graph
  let g = {
    elements: {
      nodes: [],
      edges: [],
    },
  }
  // example
  //   g.elements.nodes = [{ data: { id: 'a' } }, { data: { id: 'b' } }]
  //   g.elements.edges = [{ data: { id: 'ab', source: 'a', target: 'b' } }]

  for (let i = 0; i < r.length; i++) {
    let cat1 = r[i].cat1,
      cat2 = r[i].cat2,
      cat3 = r[i].cat3,
      cat4 = r[i].cat4

    // console.log(r[i].slug)
    // console.log(r[i].cat1);
    if (cat1) {
      g.elements.nodes.push({ data: { id: cat1 } })
    }
    if (cat2) {
      g.elements.nodes.push({ data: { id: cat2 } })
      if (cat1 != cat2) g.elements.edges.push({ data: { id: cat1 + '' + cat2, source: cat1, target: cat2 } })
    }
    if (cat3) {
      g.elements.nodes.push({ data: { id: cat3 } })
      if (cat1 != cat3) g.elements.edges.push({ data: { id: cat1 + '' + cat3, source: cat1, target: cat3 } })
      if (cat3 != cat3) g.elements.edges.push({ data: { id: cat2 + '' + cat3, source: cat2, target: cat3 } })
    }
    if (cat4) {
      g.elements.nodes.push({ data: { id: cat4 } })
      if (cat1 != cat4) g.elements.edges.push({ data: { id: cat1 + '' + cat4, source: cat1, target: cat4 } })
      if (cat2 != cat4) g.elements.edges.push({ data: { id: cat2 + '' + cat4, source: cat2, target: cat4 } })
      if (cat3 != cat4) g.elements.edges.push({ data: { id: cat3 + '' + cat4, source: cat2, target: cat4 } })
    }
  }

  return [r, g]
}
