module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        ssl: env.bool('DATABASE_SSL', false),
      }
    },
  })

// BASE

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'fortunatos-db'),
//       user: env('DATABASE_USERNAME', 'marcelo.fortunato'),
//       password: env('DATABASE_PASSWORD', 'F31j04d4'),
//       ssl: env.bool('DATABASE_SSL', false),
//     }
//   },
// })

