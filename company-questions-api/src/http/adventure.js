
const PATH = '/adventure';

const adventure = (server, db) => {
  server.get(PATH, async (req, res, next) => {
    const { companyId } = req.params;
    try {
      res.send(await db.adventure().all(companyId));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.post(PATH, async (req, res, next) => {
    const {
      name,
      coin,
      question_coin: questionCoin,
      company_id: companyId,
      difficulty_id: difficultyId,
      category_id: categoryId,
    } = req.params;
    try {
      res.send(await db.adventure().save(
        name,
        coin,
        questionCoin,
        companyId,
        difficultyId,
        categoryId,
      ));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.put(PATH, async (req, res, next) => {
    const {
      id,
      name,
      coin,
      question_coin: questionCoin,
      company_id: companyId,
      difficulty_id: difficultyId,
      category_id: categoryId, 
    } = req.params;
    try {
      res.send(await db.adventure().update(
        id,
        name,
        coin,
        questionCoin,
        companyId,
        difficultyId,
        categoryId
      ));
    } catch (error) {
      res.send(error);
    }
    next();
  });

  server.del(PATH, async (req, res, next) => {
    const { id } = req.params;
    try {
      res.send(await db.adventure().del(id));
    } catch (error) {
      res.send(error);
    }
    next();
  });
};

module.exports = adventure;
