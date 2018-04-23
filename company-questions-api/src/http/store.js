
const store = (server, db) => {
  server.get('/store', async (req, res, next) => {
    const { companyId } = req.params;
    try {
      res.send(await db.store().all(companyId));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.post('/store', async (req, res, next) => {
    const { companyId, name } = req.params;
    try {
      res.send(await db.store().save(companyId, name));
    } catch (error) {
      res.send(error);
    }
    next();
  });
};

module.exports = store;
