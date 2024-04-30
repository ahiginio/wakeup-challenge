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
const schema_2 = require("./schema");
const product_service_1 = __importDefault(require("./product.service"));
const restaurant_service_1 = __importDefault(require("../restaurant/restaurant.service"));
(0, globals_1.describe)('Product Tests', function () {
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
    (0, globals_1.describe)('Products success tests', () => {
        (0, globals_1.it)('Get all products', async () => {
            const response = await product_service_1.default.getAll();
            (0, globals_1.expect)(response.length).toBe(1800);
        });
        (0, globals_1.it)('Create product', async () => {
            const restaurants = await restaurant_service_1.default.getAll({ limit: 15, page: 1 });
            const restaurantId = restaurants.data[0]._id;
            const response = await product_service_1.default.create({
                restaurant: restaurantId,
                name: 'Product 1',
                description: 'Product 1 description',
                price: 10,
                image: 'Product 1 image',
            });
            (0, globals_1.expect)(response).toMatchObject({
                restaurant: restaurantId,
                name: 'Product 1',
                description: 'Product 1 description',
                price: 10,
                image: 'Product 1 image',
            });
        });
        (0, globals_1.it)('Get one Product', async () => {
            const response = await product_service_1.default.getAll();
            const productId = response[0]._id;
            const product = await product_service_1.default.getOne(String(productId));
            (0, globals_1.expect)(String(product._id)).toMatch(String(response[0]._id));
        });
    });
});
