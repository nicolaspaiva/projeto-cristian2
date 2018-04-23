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
  save: name => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('INSERT INTO adventure (name) VALUES (?)', [name], (error, results) => {
      if (error) {
        errorHandler(error, `Falha ao cadastrar a aventura: ${name}`, reject);
        return false;
      }
      resolve({ category: { name, id: results.insertId } });
    });
  }),
  update: (id, name) => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('UPDATE adventure SET name = ? WHERE id = ?', [name, id], (error, results) => {
      if (error) {
        errorHandler(error, `Falha ao atualizar a aventura: ${id} : ${name}`, reject);
        return false;
      }
      resolve({ category: { name, id }, affectedRows: results.affectedRows });
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
