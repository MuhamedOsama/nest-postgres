require ('dotenv').config()
export default {
  host: process.env.POSTGRES_HOST,
  type: process.env.TYPEORM_DB_TYPE,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [
    'src/**/**.entity{.ts,.js}',
  ],
  migrations: [
    'src/database/migrations/*.ts',
  ],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  synchronize: false,
};

