// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const { boards, cards, columns } = require('./db.js');
const _ = require('lodash');
const PORT = 8080;
server.use(middlewares);

server.get('/boards/:id', (req, res) => {
  let _boards = _.cloneDeep(boards);
  let _cards = _.cloneDeep(cards);
  let _columns = _.cloneDeep(columns);

  const board = _boards.find(board => board._id === req.params.id);
  const columnsIds = [...board.columns];

  columnsIds.forEach(columnID => {
    const columnIndxToPopulate = board.columns.findIndex(col => col === columnID);

    //populate columns
    board.columns[columnIndxToPopulate] = _columns.find(_column => _column._id === columnID);

    //populate cards
    const cardsIds = [...board.columns[columnIndxToPopulate].cards];
    cardsIds.forEach(cardID => {
      const cardIndxToPopulate = board.columns[columnIndxToPopulate].cards.findIndex(_card => _card === cardID);
      board.columns[columnIndxToPopulate].cards[cardIndxToPopulate] = _cards.find(_card => _card._id === cardID);
    });
  });

  res.send(board);
});

server.post('/login', (req, res) => {
  const token = '5b180b5ed8692e0763fb1b40';
  res.send(`{"token": "${token}"}`);
});

server.post('/cards/:id', (req, res) => {
  res.send('BOOO!!!!');
});

server.put('/cards/:id', (req, res) => {
  res.send('BOOO!!!!');
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
});
