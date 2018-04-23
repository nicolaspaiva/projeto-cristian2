
const question = (server, db) => {
  server.post('/question', async (req, res, next) => {
    const {
      name, description, coin, companyId, difficultyId,
    } = req.params;

    try {
      res.send(await db.question().save(name, description, coin, companyId, difficultyId));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.put('/question', async (req, res, next) => {
    const {
      id, name, description, coin, companyId, difficultyId,
    } = req.params;
    try {
      res.send(await db.question().update(id, name, description, coin, companyId, difficultyId));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.del('/question', async (req, res, next) => {
    const { id } = req.params;
    try {
      res.send(await db.question().del(id));
    } catch (error) {
      res.send(error);
    }
    next();
  });
};

module.exports = question;
