import { afterAll, beforeAll, describe, expect, it } from '@jest/globals';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import stressService from '../lib/stress-db';
import { Restaurant } from '../restaurant/schema';
import { Product } from '../product/schema';
import orderService from './order.service';
import restaurantService from '../restaurant/restaurant.service';
describe('Order Tests', function () {
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

  describe('Orders success tests', () => {
    it('Get all orders', async () => {
      const response = await orderService.getAll({ limit: 15, page: 1 });
      expect(response).toMatchObject({
        totalCount: 0,
        data: [],
        totalPages: 0,
      });
    });
    it('Create order', async () => {
      const restaurants = await restaurantService.getAll({ limit: 15, page: 1 });
      const restaurantId = restaurants.data[0]._id;
      const response = await orderService.create({
        restaurant: restaurantId,
        items: [],
        waiter: 'Jose',
        table: 200,
        total: 0,
        paid: false,
      });
      expect(response).toMatchObject({
        restaurant: restaurants.data[0]._id,
        items: [],
        waiter: 'Jose',
        table: 200,
        total: 0,
        paid: false,
      });
    });
    it('Get one Order', async () => {
      const response = await orderService.getAll({ limit: 15, page: 1 });
      const orderId = response.data[0]._id;
      const order = await orderService.getOne(String(orderId));
      expect(String(order._id)).toMatch(String(response.data[0]._id));
    });
    it('Mark order as pay', async () => {
      const response = await orderService.getAll({ limit: 15, page: 1 });
      const orderId = response.data[0]._id;
      const order = await orderService.markAsPay(String(orderId));

      expect(String(order._id)).toMatch(String(orderId));
      expect(order.paid).toBe(true);
    });
  });
});
