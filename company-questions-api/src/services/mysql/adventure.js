const adventure = deps => ({
  all: () => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('SELECT * FROM adventure', (error, results) => {
      if (error) {
        errorHandler(error, 'Falha ao listar as aventuras', reject);
        return false;
      }
      resolve({ adventure: results });
    });
  }),
  save: (
    name,
    coin,
    questionCoin,
    companyId,
    difficultyId,
    categoryId,
  ) => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('INSERT INTO adventure (name, coin, question_coin, company_id, difficulty_id, category_id) VALUES (?, ?, ?, ?, ?, ?)',
      [name, coin, questionCoin, companyId, difficultyId, categoryId], (error, results) => {
      if (error) {
        errorHandler(error, `Falha ao cadastrar a aventura: ${name}`, reject);
        return false;
      }
      resolve({ adventure: {name, coin, questionCoin, companyId, difficultyId, categoryId, id: results.insertId } });
    });
  }),
  update: (
    id,
    name,
    coin,
    questionCoin,
    companyId,
    difficultyId,
    categoryId,
  ) => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('UPDATE adventure SET name = ?, coin = ?, question_coin = ?, company_id = ?, difficulty_id = ?,  category_id = ?, WHERE id = ?', 
      [name, coin, questionCoin, companyId, difficultyId, categoryId, id], (error, results) => {
      if (error) {
        errorHandler(error, `Falha ao atualizar a aventura: ${id} : ${name}`, reject);
        return false;
      }
      resolve({ adventure: {name, coin, questionCoin, companyId, difficultyId, categoryId, id}, affectedRows: results.affectedRows });
    });
  }),
  del: id => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;
    connection.query('DELETE FROM adventure WHERE id = ?', [id], (error, results) => {
      if (error || !results.affectedRows) {
        errorHandler(error, `Falha ao remover a aventura de id: ${id}`, reject);
        return false;
      }
      resolve({ message: 'Aventura removida com sucesso!', affectedRows: results.affectedRows });
    });
  }),
});

module.exports = adventure;
