
const difficulty = (server, db) => {
  server.get('/difficulty', async (req, res, next) => {
    try {
      res.send(await db.difficulty().all());
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.post('/difficulty', async (req, res, next) => {
    const { name, initials } = req.params;
    try {
      res.send(await db.difficulty().save(name, initials));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.put('/difficulty', async (req, res, next) => {
    const {
      id, name, initials,
    } = req.params;
    try {
      res.send(await db.difficulty().update(id, name, initials));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.del('/difficulty', async (req, res, next) => {
    const { id } = req.params;
    try {
      res.send(await db.difficulty().del(id));
    } catch (error) {
      res.send(error);
    }
    next();
  });
};

module.exports = difficulty;
