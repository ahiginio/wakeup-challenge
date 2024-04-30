"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class OrderRepository {
    async exists(id) {
        const order = await schema_1.Order.exists({ _id: id });
        return order !== null;
    }
    async getAll() {
        return await schema_1.Order.find().lean();
    }
    async getAllPaginated({ query, limit, page, sort, }) {
        return await schema_1.Order.find(query)
            .populate(['restaurant', 'items'])
            .sort(sort)
            .limit(limit || 15)
            .skip((page - 1) * limit)
            .lean();
    }
    async countDocuments(query) {
        return await schema_1.Order.countDocuments(query);
    }
    async getById(orderId) {
        const order = await schema_1.Order.findById(orderId).populate(['restaurant', 'items']).lean();
        if (!order)
            throw Error('ORDER_NOT_FOUND');
        return order;
    }
    async create(order) {
        const doc = await schema_1.Order.create(order);
        if (!doc)
            throw Error('CREATE_ORDER_ERROR');
        return doc.toJSON();
    }
    async updateOne(orderId, query) {
        const doc = await schema_1.Order.findByIdAndUpdate(orderId, query, { new: true })
            .populate(['restaurant', 'items'])
            .lean();
        if (!doc)
            throw Error('UPDATE_ORDER_ERROR');
        return doc;
    }
}
exports.default = new OrderRepository();
