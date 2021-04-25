import {registerAs} from '@nestjs/config';

export const databaseConfig = registerAs(
  'database',
  (): DatabaseConfig => ({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432
  })
)

export interface DatabaseConfig {
  user: string;
  password: string;
  name: string;
  host: string;
  port: number;
}
