"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class RestaurantRepository {
    async exists(id) {
        const restaurant = await schema_1.Restaurant.exists({ _id: id });
        return restaurant !== null;
    }
    async getAll() {
        return await schema_1.Restaurant.find().lean();
    }
    async getAllPaginated({ query, limit, page, sort, }) {
        return await schema_1.Restaurant.find(query)
            .sort(sort)
            .limit(limit || 15)
            .skip((page - 1) * limit)
            .lean();
    }
    async countDocuments(query) {
        return await schema_1.Restaurant.countDocuments(query);
    }
    async getById(restaurantId) {
        const restaurant = await schema_1.Restaurant.findById(restaurantId).lean();
        if (!restaurant)
            throw Error('RESTAURANT_NOT_FOUND');
        return restaurant;
    }
    async create(restaurant) {
        const doc = await schema_1.Restaurant.create(restaurant);
        if (!doc)
            throw Error('CREATE_RESTAURANT_ERROR');
        return doc.toJSON();
    }
}
exports.default = new RestaurantRepository();
