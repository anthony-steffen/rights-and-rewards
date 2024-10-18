require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || null,
    database: `${process.env.DB_NAME}_dev` || 'db_dev',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || null,
    database: `${process.env.DB_NAME}_test` || 'db_test',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || null,
    database: `${process.env.DB_NAME}_prod` || 'db_prod',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql'
  }
};
