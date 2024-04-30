"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_repository_1 = __importDefault(require("./order.repository"));
class OrderService {
    async getAll({ limit, page }) {
        const totalCount = await order_repository_1.default.countDocuments({});
        const restaurants = await order_repository_1.default.getAllPaginated({
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
    async getOne(orderId) {
        return await order_repository_1.default.getById(orderId);
    }
    async create(order) {
        return await order_repository_1.default.create(order);
    }
    async markAsPay(orderId) {
        return await order_repository_1.default.updateOne(orderId, { paid: true });
    }
}
exports.default = new OrderService();
