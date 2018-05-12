
const db = require('../services/mysql');

const adventure = require('./adventure');
const companies = require('./companies');
const difficulty = require('./difficulty');
const product = require('./product');
const question = require('./question');
const store = require('./store');
const user = require('./user');
const category = require('./category');

const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Enjoy the silence!');
    next();
  });

  server.post('/autenticacao', async (req, res, next) => {
    try {
      const { email, password } = req.params;
      res.send(await db.auth().authenticate(email, password));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  adventure(server, db);
  companies(server, db);
  difficulty(server, db);
  product(server, db);
  question(server, db);
  store(server, db);
  user(server, db);
  category(server, db);
};

module.exports = routes;
