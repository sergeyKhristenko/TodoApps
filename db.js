exports.boards = [
  {
    users: ['5b168f2353e5f9707332fbc5'],
    _id: '5b28f213edb0f3001027d30f',
    name: 'first board',
    columns: ['5b28f38dedb0f3001027d312', '5b28f393edb0f3001027d314', '5b28f39bedb0f3001027d315']
  }
];

exports.columns = [
  {
    _id: '5b28f38dedb0f3001027d312',
    name: 'first column',
    cards: ['5b291b47edb0f3001027d325', '5b2917bdedb0f3001027d321', '5b28f3c4edb0f3001027d316']
  },
  {
    _id: '5b28f393edb0f3001027d314',
    name: 'second column',
    cards: ['5b291282edb0f3001027d320']
  },
  {
    _id: '5b28f39bedb0f3001027d315',
    name: 'third column',
    cards: []
  }
];

exports.cards = [
  {
    _id: '5b291b47edb0f3001027d325',
    title: 'df sdfs d',
    text: 'sdf sdfsd fsdf\nsdf sd\nfsdf \nsdf\nsd\nf\nsdfsdfsdf\nsdf\nsd\nfsd\nf\nsdf',
    color: 'rgb(226, 125, 95)',
    columnId: '5b28f38dedb0f3001027d312'
  },
  {
    _id: '5b2917bdedb0f3001027d321',
    title: 'zxczxczxc',
    text: 'zxc',
    color: 'rgb(133, 205, 202)',
    columnId: '5b28f38dedb0f3001027d312'
  },
  {
    _id: '5b28f3c4edb0f3001027d316',
    title: 'Card Title 2',
    text: '2Card text',
    color: 'rgb(232, 168, 124)',
    columnId: '5b28f393edb0f3001027d314'
  },
  {
    _id: '5b291282edb0f3001027d320',
    title: 'sdfsdfsdfsd',
    text: 'sdfsdfsdf sd fsdfasdsad',
    color: 'rgb(195, 141, 157)',
    columnId: '5b28f39bedb0f3001027d315'
  }
];
