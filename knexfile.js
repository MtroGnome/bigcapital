require('dotenv').config();

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
      directory: './packages/server/src/database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './packages/server/src/database/seeds'
    },
    pool: {
      min: 0,
      max: 7
    }
  },
  production: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'bigcapital',
      password: process.env.DB_PASSWORD || 'bigcapital',
      database: process.env.SYSTEM_DB_NAME || 'bigcapital_system',
      charset: 'utf8'
    },
    migrations: {
      directory: './packages/server/src/database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './packages/server/src/database/seeds'
    },
    pool: {
      min: 0,
      max: 7
    }
  }
}; 