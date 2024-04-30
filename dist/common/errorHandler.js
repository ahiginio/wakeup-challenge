"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const logger_1 = __importDefault(require("../common/logger"));
const errorHandler = (err, res) => {
    switch (err.message) {
        case 'CREATE_ORDER_ERROR':
            return res.status(400).json({
                code: 400,
                message: 'Oops. Something happens trying to create the order. Try again',
            });
        case 'CREATE_RESTAURANT_ERROR':
            return res.status(400).json({
                code: 400,
                message: 'Oops. Something happens trying to create the restaurant. Try again',
            });
        case 'CREATE_PRODUCT_ERROR':
            return res.status(400).json({
                code: 400,
                message: 'Oops. Something happens trying to create the product. Try again',
            });
        case 'PRODUCT_NOT_FOUND':
            return res.status(400).json({ code: 400, message: 'Product not found' });
        case 'RESTAURANT_NOT_FOUND':
            return res.status(400).json({ code: 400, message: 'Restaurant not found' });
        case 'MISSING_DATA':
            return res.status(400).json({ code: 400, message: 'Missing data' });
        default:
            logger_1.default.error(err.message);
            return res.status(500).json({ code: 500, message: 'Internal server error.' });
    }
};
exports.errorHandler = errorHandler;
