"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_repository_1 = __importDefault(require("./product.repository"));
class ProductService {
    async getAll() {
        return await product_repository_1.default.getAll();
    }
    async getOne(productId) {
        return await product_repository_1.default.getById(productId);
    }
    async create(product) {
        return await product_repository_1.default.create(product);
    }
}
exports.default = new ProductService();
