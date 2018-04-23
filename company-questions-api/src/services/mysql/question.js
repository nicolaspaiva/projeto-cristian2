const question = deps => ({
  all: () => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('SELECT * FROM question', (error, results) => {
      if (error) {
        errorHandler(error, 'Falha ao listar as perguntas', reject);
        return false;
      }
      resolve({ question: results });
    });
  }),
  save: (name, description, coin, companyId, difficultyId) => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    console.warn('save: (name, description, coin, companyId, difficultyId)');
    console.log(name, description, coin, companyId, difficultyId);

    connection.query('INSERT INTO question (name, description, coin, company_id, difficulty_id) VALUES ?', {
      name, description, coin, company_id: companyId, difficulty_id: difficultyId,
    }, (error, results) => {
      if (error) {
        errorHandler(error, `Falha ao cadastrar a pergunta: ${name}`, reject);
        return false;
      }
      resolve({ category: { name, id: results.insertId } });
    });
  }),
  update: (id, name, description, coin, companyId, difficultyId) => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('UPDATE question SET ? WHERE id = ?', [{
      name, description, coin, companyId, difficultyId,
    }, id], (error, results) => {
      if (error) {
        errorHandler(error, `Falha ao atualizar a pergunta: ${id} : ${name}`, reject);
        return false;
      }
      resolve({ category: { name, id }, affectedRows: results.affectedRows });
    });
  }),
  del: id => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;
    connection.query('DELETE FROM question WHERE id = ?', [id], (error, results) => {
      if (error || !results.affectedRows) {
        errorHandler(error, `Falha ao remover a pergunta de id: ${id}`, reject);
        return false;
      }
      resolve({ message: 'Pergunta removida com sucesso!', affectedRows: results.affectedRows });
    });
  }),
});

module.exports = question;
