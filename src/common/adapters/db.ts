import mongoose from 'mongoose';
import logger from '../logger';
import { default as Settings } from '../../settings';

const requiresAuth = !!(Settings.mongoUser && Settings.mongoPassword);
if (!requiresAuth) {
  logger.info(Settings);
}

const protocol = requiresAuth ? 'mongodb+srv' : 'mongodb';
const mongoAuth = requiresAuth ? `${Settings.mongoUser}:${Settings.mongoPassword}@` : '';
const mongoUri = `${protocol}://${mongoAuth}${Settings.mongoHost}/${Settings.mongoDbName}?retryWrites=true&w=majority`;
const mongoSafeUri = mongoAuth
  ? `${protocol}://{secret}@${Settings.mongoHost}/${Settings.mongoDbName}?retryWrites=true&w=majority`
  : mongoUri;

logger.info(`Connecting to ${mongoSafeUri} ...`);

mongoose
  .connect(mongoUri)
  .then(async () => {
    logger.info(`Connection to ${mongoSafeUri} successful`);
  })
  .catch((err) => {
    logger.error((err as Error).message);
    throw err;
  });
