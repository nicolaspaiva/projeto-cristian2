
const product = (server, db) => {
  server.get('/product', async (req, res, next) => {
    const { storeId } = req.params;
    try {
      res.send(await db.product().all(storeId));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.post('/product', async (req, res, next) => {
    const { storeId, name, coin } = req.params;
    try {
      res.send(await db.product().save(storeId, name, coin));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.put('/product', async (req, res, next) => {
    const {
      id, storeId, name, coin,
    } = req.params;
    try {
      res.send(await db.product().update(id, storeId, name, coin));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.del('/product', async (req, res, next) => {
    const { id } = req.params;
    try {
      res.send(await db.product().del(id));
    } catch (error) {
      res.send(error);
    }
    next();
  });
};

module.exports = product;
