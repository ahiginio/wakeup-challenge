import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import logger from '../common/logger';
import { Product } from '../product/schema';
import { Restaurant } from '../restaurant/schema';
import settings from '../settings';
import stressService from './stress-db';
async function connection() {
  dotenv.config({ path: __dirname + '/./../../.env' });

  const requiresAuth = !!(settings.mongoUser && settings.mongoPassword);
  if (!requiresAuth) {
    //console.log(settings);
  }
  const protocol = requiresAuth ? 'mongodb+srv' : 'mongodb';
  const mongoAuth = requiresAuth ? `${settings.mongoUser}:${settings.mongoPassword}@` : '';
  const mongoUri = `${protocol}://${mongoAuth}${settings.mongoHost}/${settings.mongoDbName}?retryWrites=true&w=majority`;
  const mongoSafeUri = mongoAuth
    ? `${protocol}://{secret}@${settings.mongoHost}/${settings.mongoDbName}?retryWrites=true&w=majority`
    : mongoUri;

  // eslint-disable-next-line no-console
  console.log(`Connecting to ${mongoSafeUri} ...`);
  mongoose
    .connect(mongoUri)
    .then(() => logger.info(`Connection to ${mongoSafeUri} successful`))
    .catch((err) => {
      logger.error((err as Error).message);
      throw err;
    });
}
const seedData = async () => {
  await connection();
  await stressService.createData();
  for (const restaurant of stressService.restaurants) {
    await Restaurant.create(restaurant);
  }
  await Product.insertMany(stressService.products);
};

seedData()
  .then(() => {
    process.exit();
  })
  .catch((err) => {
    logger.error(`Error en ejecuccion: ${JSON.stringify(err)}`);
    process.exit();
  });
