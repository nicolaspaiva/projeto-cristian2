const category = deps => ({
  all: () => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('SELECT * FROM category', (error, results) => {
      if (error) {
        errorHandler(error, 'Falha ao listar as categorias', reject);
        return false;
      }
      resolve({ category: results });
    });
  }),
  save: (name, color, logo, companyId) => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('INSERT INTO category (name, color, logo, company_id) VALUES (?, ?, ?, ?)', 
      [ name, color, logo, companyId ], (error, results) => {
      
      if (error) {
        errorHandler(error, `Falha ao cadastrar a categoria: ${name}`, reject);
        return false;
      }
      resolve({ category: { name, color, logo, companyId, id: results.insertId } });
    });
  }),
  update: (id, name) => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;

    connection.query('UPDATE category SET name = ? WHERE id = ?', [name, id], (error, results) => {
      if (error) {
        errorHandler(error, `Falha ao atualizar a categoria: ${id} : ${name}`, reject);
        return false;
      }
      resolve({ category: { name, id }, affectedRows: results.affectedRows });
    });
  }),
  del: id => new Promise((resolve, reject) => {
    const { connection, errorHandler } = deps;
    connection.query('DELETE FROM category WHERE id = ?', [id], (error, results) => {
      if (error || !results.affectedRows) {
        errorHandler(error, `Falha ao remover a categoria de id: ${id}`, reject);
        return false;
      }
      resolve({ message: 'Categoria removida com sucesso!', affectedRows: results.affectedRows });
    });
  }),

});

module.exports = category;
