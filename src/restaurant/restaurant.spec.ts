import { afterAll, beforeAll, describe, expect, it } from '@jest/globals';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import stressService from '../lib/stress-db';
import { Restaurant } from './schema';
import restaurantService from './restaurant.service';
import { Product } from '../product/schema';
describe('Restaurant Tests', function () {
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

  describe('Restaurants success tests', () => {
    it('Get all restaurants', async () => {
      const response = await restaurantService.getAll({ limit: 15, page: 1 });
      expect(response.totalCount).toBe(30);
      expect(response.totalPages).toBe(2);
    });
    it('Create restaurant', async () => {
      const response = await restaurantService.create({
        name: 'Restaurant 1',
        image: 'https://loremflickr.com/640/480?lock=3648806736363520',
        description: 'Restaurant 1 description',
      });
      expect(response.name).toBe('Restaurant 1');
    });
    it('Get one Restaurant', async () => {
      const response = await restaurantService.getAll({ limit: 15, page: 1 });
      const restaurantId = response.data[0]._id;
      const restaurant = await restaurantService.getOne(String(restaurantId));
      expect(String(restaurant._id)).toMatch(String(response.data[0]._id));
    });
    it('Get one Restaurant Products', async () => {
      const response = await restaurantService.getAll({ limit: 15, page: 1 });
      const restaurantId = response.data[0]._id;
      const products = await restaurantService.getProducts({
        limit: 15,
        page: 1,
        restaurantId: String(restaurantId),
      });
      expect(products.totalCount).toBe(60);
      expect(products.totalPages).toBe(4);
    });
    it('Get one Restaurant Products - Restaurant not found', async () => {
      try {
        const restaurantId = '6630ed31162cce93a1e2e2a7';
        await restaurantService.getProducts({
          limit: 15,
          page: 1,
          restaurantId: String(restaurantId),
        });
      } catch (err) {
        expect((err as Error).message).toBe('RESTAURANT_NOT_FOUND');
      }
    });
    it('Get one Restaurant Products - Search by name', async () => {
      const response = await restaurantService.getAll({ limit: 15, page: 1 });
      const restaurantId = response.data[0]._id;
      const products = await restaurantService.getProducts({
        limit: 15,
        page: 1,
        restaurantId: String(restaurantId),
        search: 'Spaghetti',
      });
      expect(products.totalCount).toBe(1);
      expect(products.totalPages).toBe(1);
    });
  });
});
