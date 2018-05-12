const PATH = '/category'

const category = (server, db) => {
  server.get(PATH, async (req, res, next) => {
    try {
      res.send(await db.category().all());
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.post(PATH, async (req, res, next) => {
    const { name, color, logo, company_id:companyId } = req.params;
    try {
      res.send(await db.category().save(name, color, logo, companyId));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.put(PATH, async (req, res, next) => {
    const { 
      name, color, logo, company_id:companyId 
    } = req.params;
    try {
      res.send(await db.category().update(id, name, color, logo, companyId));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.del(PATH, async (req, res, next) => {
    const { id } = req.params;
    try {
      res.send(await db.category().del(id));
    } catch (error) {
      res.send(error);
    }
    next();
  });
};

module.exports = category;
