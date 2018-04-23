
const companies = (server, db) => {
  server.get('/company', async (req, res, next) => {
    try {
      res.send(await db.companies().all());
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.post('/company', async (req, res, next) => {
    const { name } = req.params;
    try {
      res.send(await db.companies().save(name));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.put('/company', async (req, res, next) => {
    const { id, name } = req.params;
    try {
      res.send(await db.companies().update(id, name));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.del('/company', async (req, res, next) => {
    const { id } = req.params;
    try {
      res.send(await db.companies().del(id));
    } catch (error) {
      res.send(error);
    }
    next();
  });
};

module.exports = companies;
