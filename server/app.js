const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./utils/DataBaseUtils');
const { serverPort } = require('./utils/config.json');

db.setUpConnection();

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.get('/notes', (req, res) => {
  db.listNotes().then(data => {
    res.send(data);
  });
});

app.post('/notes', (req, res) => {
  db.createNote(req.body).then(data => {
    res.send(data);
  });
});

app.delete('/notes/:id', (req, res) => {
  db.deleteNote(req.params.id).then(data => {
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.send(data);
  });
});

const servre = app.listen(serverPort, () => {
  console.log(`Server is up on ${serverPort}`);
});
