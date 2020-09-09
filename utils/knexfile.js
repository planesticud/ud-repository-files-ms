const {
  DB_NAME,
  DB_PASSWORD,
  DB_HOST,
  DB_USER
} = process.env

module.exports = {
    development: {
        client: 'postgresql',
        connection: {
          host: DB_HOST || 'localhost',
          database: DB_NAME || 'wordpress_laser',
          user:     DB_USER || 'postgres',
          password: DB_PASSWORD || 'changeme'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: '../migrations',
        tableName: 'knex_migrations'
      }
    },
    staging: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
    production: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  };