
const user = (server, db) => {
  server.post('/user', async (req, res, next) => {
    const {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      companyId,
    } = req.params;
    try {
      res.send(await db.users().save(
        firstName,
        lastName,
        email,
        password,
        companyId,
      ));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.put('/user', async (req, res, next) => {
    const {
      id,
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      companyId,
    } = req.params;
    try {
      res.send(await db.users().update(
        id,
        firstName,
        lastName,
        email,
        password,
        companyId,
      ));
    } catch (error) {
      res.send(error);
    }
    next();
  });
};

module.exports = user;

