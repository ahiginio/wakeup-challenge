"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const env = process.env;
exports.default = {
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
