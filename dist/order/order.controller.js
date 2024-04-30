"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = require("../common/errorHandler");
const order_service_1 = __importDefault(require("./order.service"));
class OrderController {
    create(req, res) {
        const { restaurant, items, total, table, waiter, paid } = req.body;
        if (!restaurant || !items || !total || !table || !waiter || paid === undefined)
            throw Error('MISSING_DATA');
        order_service_1.default
            .create({ restaurant, items, total, table, waiter, paid })
            .then((body) => {
            res.status(200).json(body);
        })
            .catch((err) => (0, errorHandler_1.errorHandler)(err, res));
    }
    getAll(req, res) {
        const { limit, page } = req.query;
        order_service_1.default
            .getAll({ limit: Number(limit) || 15, page: Number(page) || 1 })
            .then((body) => {
            res.status(200).json(body);
        })
            .catch((err) => (0, errorHandler_1.errorHandler)(err, res));
    }
    getOne(req, res) {
        if (!req.params.orderId)
            throw Error('MISSING_DATA');
        order_service_1.default
            .getOne(req.params.orderId)
            .then((body) => {
            res.status(200).json(body);
        })
            .catch((err) => (0, errorHandler_1.errorHandler)(err, res));
    }
    markAsPay(req, res) {
        if (!req.params.orderId)
            throw Error('MISSING_DATA');
        order_service_1.default
            .markAsPay(req.params.orderId)
            .then((body) => {
            res.status(200).json(body);
        })
            .catch((err) => (0, errorHandler_1.errorHandler)(err, res));
    }
}
exports.default = new OrderController();
