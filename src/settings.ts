import { config } from 'dotenv';
config(); // Configure dotenv to load in the .env file

const env = process.env;

export default {
  publicHost: env.PUBLIC_URL ?? 'https://x3paddle.com/',

  mongoHost: env.MONGO_HOST ?? 'db-x3paddle',
  mongoUser: env.MONGO_USER ?? '',
  mongoPassword: env.MONGO_PASSWORD ?? '',
  mongoDbName: env.MONGO_DB_NAME ?? 'wakeup-challenge',

  loggerName: env.APP_ID ?? 'api',
  loggerLevel: env.LOG_LEVEL ?? 'debug',
  applicationPort: env.PORT ?? '8080',
  environment: env.ENVIRONMENT ?? 'prod',

  adminId: env.ADMIN_ID ?? '',
  apiUrl: env.API_URL ?? '',
};
