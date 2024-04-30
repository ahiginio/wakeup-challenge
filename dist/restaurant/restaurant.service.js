"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_repository_1 = __importDefault(require("../product/product.repository"));
const restaurant_repository_1 = __importDefault(require("./restaurant.repository"));
class RestaurantService {
    async getAll({ limit, page }) {
        const totalCount = await restaurant_repository_1.default.countDocuments({});
        const restaurants = await restaurant_repository_1.default.getAllPaginated({
            query: {},
            limit,
            page,
        });
        return {
            data: restaurants,
            totalCount,
            currentPage: page,
            totalPages: Math.ceil(totalCount / limit),
        };
    }
    async getOne(restaurantId) {
        return await restaurant_repository_1.default.getById(restaurantId);
    }
    async create(restaurant) {
        return await restaurant_repository_1.default.create(restaurant);
    }
    async getProducts({ limit, page, restaurantId, search, }) {
        if (!(await restaurant_repository_1.default.exists(restaurantId)))
            throw Error('RESTAURANT_NOT_FOUND');
        const query = search
            ? { name: { $regex: search, $options: 'i' }, restaurant: restaurantId }
            : { restaurant: restaurantId };
        const totalCount = await product_repository_1.default.countDocuments(query);
        const products = await product_repository_1.default.getAllPaginated({
            query,
            limit,
            page,
        });
        return {
            data: products,
            totalCount,
            currentPage: page,
            totalPages: Math.ceil(totalCount / limit),
        };
    }
}
exports.default = new RestaurantService();
