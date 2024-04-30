"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
const stress_db_1 = __importDefault(require("../lib/stress-db"));
const schema_1 = require("./schema");
const restaurant_service_1 = __importDefault(require("./restaurant.service"));
const schema_2 = require("../product/schema");
(0, globals_1.describe)('Restaurant Tests', function () {
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
    (0, globals_1.describe)('Restaurants success tests', () => {
        (0, globals_1.it)('Get all restaurants', async () => {
            const response = await restaurant_service_1.default.getAll({ limit: 15, page: 1 });
            (0, globals_1.expect)(response.totalCount).toBe(30);
            (0, globals_1.expect)(response.totalPages).toBe(2);
        });
        (0, globals_1.it)('Create restaurant', async () => {
            const response = await restaurant_service_1.default.create({
                name: 'Restaurant 1',
                image: 'https://loremflickr.com/640/480?lock=3648806736363520',
                description: 'Restaurant 1 description',
            });
            (0, globals_1.expect)(response.name).toBe('Restaurant 1');
        });
        (0, globals_1.it)('Get one Restaurant', async () => {
            const response = await restaurant_service_1.default.getAll({ limit: 15, page: 1 });
            const restaurantId = response.data[0]._id;
            const restaurant = await restaurant_service_1.default.getOne(String(restaurantId));
            (0, globals_1.expect)(String(restaurant._id)).toMatch(String(response.data[0]._id));
        });
        (0, globals_1.it)('Get one Restaurant Products', async () => {
            const response = await restaurant_service_1.default.getAll({ limit: 15, page: 1 });
            const restaurantId = response.data[0]._id;
            const products = await restaurant_service_1.default.getProducts({
                limit: 15,
                page: 1,
                restaurantId: String(restaurantId),
            });
            (0, globals_1.expect)(products.totalCount).toBe(60);
            (0, globals_1.expect)(products.totalPages).toBe(4);
        });
        (0, globals_1.it)('Get one Restaurant Products - Restaurant not found', async () => {
            try {
                const restaurantId = '6630ed31162cce93a1e2e2a7';
                await restaurant_service_1.default.getProducts({
                    limit: 15,
                    page: 1,
                    restaurantId: String(restaurantId),
                });
            }
            catch (err) {
                (0, globals_1.expect)(err.message).toBe('RESTAURANT_NOT_FOUND');
            }
        });
        (0, globals_1.it)('Get one Restaurant Products - Search by name', async () => {
            const response = await restaurant_service_1.default.getAll({ limit: 15, page: 1 });
            const restaurantId = response.data[0]._id;
            const products = await restaurant_service_1.default.getProducts({
                limit: 15,
                page: 1,
                restaurantId: String(restaurantId),
                search: 'Spaghetti',
            });
            (0, globals_1.expect)(products.totalCount).toBe(1);
            (0, globals_1.expect)(products.totalPages).toBe(1);
        });
    });
});
