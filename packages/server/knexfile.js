require('dotenv').config({ path: '../../.env' });

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'bigcapital',
      password: process.env.DB_PASSWORD || 'bigcapital',
      database: process.env.SYSTEM_DB_NAME || 'bigcapital_system',
      charset: 'utf8'
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'knex_migrations',
      extension: 'ts',
      loadExtensions: ['.ts']
    },
    seeds: {
      directory: './src/database/seeds',
      loadExtensions: ['.ts']
    },
    pool: {
      min: 0,
      max: 7
    }
  }
}; 