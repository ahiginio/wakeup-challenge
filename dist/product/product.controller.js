"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = __importDefault(require("./product.service"));
const errorHandler_1 = require("../common/errorHandler");
class ProductController {
    getAll(req, res) {
        product_service_1.default
            .getAll()
            .then((body) => {
            res.status(200).json(body);
        })
            .catch((err) => (0, errorHandler_1.errorHandler)(err, res));
    }
    getOne(req, res) {
        if (!req.params.productId)
            throw Error('MISSING_DATA');
        product_service_1.default
            .getOne(req.params.productId)
            .then((body) => {
            res.status(200).json(body);
        })
            .catch((err) => (0, errorHandler_1.errorHandler)(err, res));
    }
}
exports.default = new ProductController();
