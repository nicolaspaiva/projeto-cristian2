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
  save:(
    description,
    companyId,
    difficultyId,
    adventureId
  ) => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;    
    
    connection.query('INSERT INTO question (description, company_id, difficulty_id, adventure_id) VALUES (?, ?, ?, ?, ?, ?)', 
    [ description, companyId, difficultyId, adventureId ] , (error, results) => {
      if (error) {
        errorHandler(error, `Falha ao cadastrar a pergunta: ${description}`, reject);
        return false;
      }
      resolve({ category: { description, companyId, difficultyId, adventureId, id: results.insertId } });
    });
  }),
  update: ( 
    id,
    description,
    companyId,
    difficultyId,
    adventureId
  ) => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('UPDATE question SET ? WHERE id = ?', [{
      description,
      companyId,
      difficultyId,
      adventureId,
    }, id], (error, results) => {
      if (error) {
        errorHandler(error, `Falha ao atualizar a pergunta: ${id}`, reject);
        return false;
      }
      resolve({ category: { description, companyId, difficultyId, adventureId, id }, affectedRows: results.affectedRows });
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
