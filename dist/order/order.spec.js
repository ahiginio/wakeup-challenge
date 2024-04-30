"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
const stress_db_1 = __importDefault(require("../lib/stress-db"));
const schema_1 = require("../restaurant/schema");
const schema_2 = require("../product/schema");
const order_service_1 = __importDefault(require("./order.service"));
const restaurant_service_1 = __importDefault(require("../restaurant/restaurant.service"));
(0, globals_1.describe)('Order Tests', function () {
    let mongoServer;
    (0, globals_1.beforeAll)(async () => {
        mongoServer = await mongodb_memory_server_1.MongoMemoryServer.create({
            instance: {
                dbName: 'wakeup-challenge',
            },
        });
        await mongoose_1.default.connect(mongoServer.getUri(), { dbName: 'wakeup-challenge' });
        await mongoose_1.default.connection.dropDatabase();
        await stress_db_1.default.createData();
        for (const restaurant of stress_db_1.default.restaurants) {
            await schema_1.Restaurant.create(restaurant);
        }
        await schema_2.Product.insertMany(stress_db_1.default.products);
    });
    (0, globals_1.afterAll)(async () => {
        await mongoose_1.default.connection.dropDatabase();
        await mongoose_1.default.connection.close();
        await mongoServer.stop();
    });
    (0, globals_1.describe)('Orders success tests', () => {
        (0, globals_1.it)('Get all orders', async () => {
            const response = await order_service_1.default.getAll({ limit: 15, page: 1 });
            (0, globals_1.expect)(response).toMatchObject({
                totalCount: 0,
                data: [],
                totalPages: 0,
            });
        });
        (0, globals_1.it)('Create order', async () => {
            const restaurants = await restaurant_service_1.default.getAll({ limit: 15, page: 1 });
            const restaurantId = restaurants.data[0]._id;
            const response = await order_service_1.default.create({
                restaurant: restaurantId,
                items: [],
                waiter: 'Jose',
                table: 200,
                total: 0,
                paid: false,
            });
            (0, globals_1.expect)(response).toMatchObject({
                restaurant: restaurants.data[0]._id,
                items: [],
                waiter: 'Jose',
                table: 200,
                total: 0,
                paid: false,
            });
        });
        (0, globals_1.it)('Get one Order', async () => {
            const response = await order_service_1.default.getAll({ limit: 15, page: 1 });
            const orderId = response.data[0]._id;
            const order = await order_service_1.default.getOne(String(orderId));
            (0, globals_1.expect)(String(order._id)).toMatch(String(response.data[0]._id));
        });
        (0, globals_1.it)('Mark order as pay', async () => {
            const response = await order_service_1.default.getAll({ limit: 15, page: 1 });
            const orderId = response.data[0]._id;
            const order = await order_service_1.default.markAsPay(String(orderId));
            (0, globals_1.expect)(String(order._id)).toMatch(String(orderId));
            (0, globals_1.expect)(order.paid).toBe(true);
        });
    });
});
