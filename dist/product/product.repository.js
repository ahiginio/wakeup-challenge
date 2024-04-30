"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class ProductRepository {
    async exists(id) {
        const product = await schema_1.Product.exists({ _id: id });
        return product !== null;
    }
    async getAll() {
        return await schema_1.Product.find().lean();
    }
    async getAllPaginated({ query, limit, page, sort, }) {
        return await schema_1.Product.find(query)
            .populate('restaurant')
            .sort(sort)
            .limit(limit || 15)
            .skip((page - 1) * limit)
            .lean();
    }
    async countDocuments(query) {
        return await schema_1.Product.countDocuments(query);
    }
    async getById(productId) {
        const product = await schema_1.Product.findById(productId).lean();
        if (!product)
            throw Error('PRODUCT_NOT_FOUND');
        return product;
    }
    async create(product) {
        const doc = await schema_1.Product.create(product);
        if (!doc)
            throw Error('CREATE_PRODUCT_ERROR');
        return doc.toJSON();
    }
}
exports.default = new ProductRepository();
