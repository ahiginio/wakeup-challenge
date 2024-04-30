import { afterAll, beforeAll, describe, expect, it } from '@jest/globals';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import stressService from '../lib/stress-db';
import { Restaurant } from '../restaurant/schema';
import { Product } from './schema';
import productService from './product.service';
import restaurantService from '../restaurant/restaurant.service';
describe('Product Tests', function () {
  let mongoServer: MongoMemoryServer;
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create({
      instance: {
        dbName: 'wakeup-challenge',
      },
    });
    await mongoose.connect(mongoServer.getUri(), { dbName: 'wakeup-challenge' });
    await mongoose.connection.dropDatabase();
    await stressService.createData();
    for (const restaurant of stressService.restaurants) {
      await Restaurant.create(restaurant);
    }
    await Product.insertMany(stressService.products);
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
  });

  describe('Products success tests', () => {
    it('Get all products', async () => {
      const response = await productService.getAll();
      expect(response.length).toBe(1800);
    });
    it('Create product', async () => {
      const restaurants = await restaurantService.getAll({ limit: 15, page: 1 });
      const restaurantId = restaurants.data[0]._id;
      const response = await productService.create({
        restaurant: restaurantId,
        name: 'Product 1',
        description: 'Product 1 description',
        price: 10,
        image: 'Product 1 image',
      });
      expect(response).toMatchObject({
        restaurant: restaurantId,
        name: 'Product 1',
        description: 'Product 1 description',
        price: 10,
        image: 'Product 1 image',
      });
    });
    it('Get one Product', async () => {
      const response = await productService.getAll();
      const productId = response[0]._id;
      const product = await productService.getOne(String(productId));
      expect(String(product._id)).toMatch(String(response[0]._id));
    });
  });
});
