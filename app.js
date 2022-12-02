const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'tproject',
  port: 3307,
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  connection.query('SELECT * FROM info', (err,rows) => {
    if(err) throw err;
    
    if (rows) res.send(rows);
    else res.send({error: "Error"});
  });
})

app.post('/add', (req, res) => {
  const { name, sector, termsAgreed } = req.body;
  connection.query(`INSERT INTO info (name, sector, termsAgreed) VALUES ('${name}', '${sector}', '${termsAgreed}')`, (err, rows) => {
    if(err) throw err;
    if (rows) res.send({status: 200});
    else res.send({error: "Error"});
  });
})

app.put("/update", (req, res) => {
  const { id, name, sector, termsAgreed } = req.body;
  connection.query(`UPDATE info SET name = '${name}', sector = '${sector}', termsAgreed = '${termsAgreed}' WHERE id = ${id}`, (err, rows) => {
    if(err) throw err;
    if (rows) res.send({status: 200});
    else res.send({error: "Error"});
  });
});

app.listen(3001, () => {
  console.log('listening on port 3001');
});
