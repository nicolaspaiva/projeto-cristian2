
const adventure = (server, db) => {
  server.get('/adventure', async (req, res, next) => {
    const { companyId } = req.params;
    try {
      res.send(await db.adventures().all(companyId));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.post('/adventure', async (req, res, next) => {
    const {
      companyId, difficultyId, name, coin,
    } = req.params;
    try {
      res.send(await db.adventures().save(companyId, difficultyId, name, coin));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.put('/adventure', async (req, res, next) => {
    const {
      id, companyId, difficultyId, name, coin,
    } = req.params;
    try {
      res.send(await db.adventures().update(id, companyId, difficultyId, name, coin));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.del('/adventure', async (req, res, next) => {
    const { id } = req.params;
    try {
      res.send(await db.adventures().del(id));
    } catch (error) {
      res.send(error);
    }
    next();
  });
};

module.exports = adventure;
