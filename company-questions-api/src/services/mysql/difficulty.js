const difficulty = deps => ({
  all: () => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('SELECT * FROM difficulty', (error, results) => {
      if (error) {
        errorHandler(error, 'Falha ao listar as dificuldades', reject);
        return false;
      }
      resolve({ difficulty: results });
    });
  }),
  save: (name, initials) => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('INSERT INTO difficulty SET ?', { name, initials }, (error, results) => {
      if (error) {
        errorHandler(error, `Falha ao cadastrar a dificuldade: ${name}`, reject);
        return false;
      }
      resolve({ difficulty: { name, id: results.insertId } });
    });
  }),
  update: (id, name) => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('UPDATE difficulty SET name = ? WHERE id = ?', [name, id], (error, results) => {
      if (error) {
        errorHandler(error, `Falha ao atualizar a dificuldade: ${id} : ${name}`, reject);
        return false;
      }
      resolve({ difficulty: { name, id }, affectedRows: results.affectedRows });
    });
  }),
});

module.exports = difficulty;
