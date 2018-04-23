const mysqlServer = require('mysql');

const connection = mysqlServer.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

const errorHandler = (error, msg, rejectFunction) => {
  console.error(error);
  rejectFunction({ error: msg });
};

const userModule = require('./users')({ connection, errorHandler });
const authModule = require('./auth')({ connection, errorHandler });
const companiesModule = require('./companies')({ connection, errorHandler });
const difficultyModule = require('./difficulty')({ connection, errorHandler });
const questionModule = require('./question')({ connection, errorHandler });

module.exports = {
  users: () => userModule,
  auth: () => authModule,
  companies: () => companiesModule,
  difficulty: () => difficultyModule,
  question: () => questionModule,
};
