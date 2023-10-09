const {
  addBooksHandler,
  getAllBooksHandler,
  getDetailedBookHandler,
  editBookHandler,
  deleteBookHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getDetailedBookHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
