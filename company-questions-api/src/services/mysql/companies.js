const companies = deps => ({
  all: () => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('SELECT * FROM company', (error, results) => {
      if (error) {
        errorHandler(error, 'Falha ao listar as empresas', reject);
        return false;
      }
      resolve({ company: results });
    });
  }),
  save: name => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('INSERT INTO company (name) VALUES (?)', [name], (error, results) => {
      if (error) {
        errorHandler(error, `Falha ao cadastrar a empresa: ${name}`, reject);
        return false;
      }
      resolve({ category: { name, id: results.insertId } });
    });
  }),
  update: (id, name) => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('UPDATE company SET name = ? WHERE id = ?', [name, id], (error, results) => {
      if (error) {
        errorHandler(error, `Falha ao atualizar a empresa: ${id} : ${name}`, reject);
        return false;
      }
      resolve({ category: { name, id }, affectedRows: results.affectedRows });
    });
  }),
});

module.exports = companies;
