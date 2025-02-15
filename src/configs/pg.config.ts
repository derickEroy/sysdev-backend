import { DataSource, DataSourceOptions } from "typeorm";
import 'dotenv/config';

export const pgOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/database/migrations/*.js']
}

const pgDataSource = new DataSource(pgOptions);

export default pgDataSource;