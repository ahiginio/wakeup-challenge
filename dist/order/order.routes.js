"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = __importDefault(require("./order.controller"));
exports.default = express_1.default
    .Router()
    .post('/order', order_controller_1.default.create)
    .get('/order', order_controller_1.default.getAll)
    .get('/order/:orderId', order_controller_1.default.getOne)
    .patch('/order/:orderId/paid', order_controller_1.default.markAsPay);
