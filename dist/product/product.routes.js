"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = __importDefault(require("./product.controller"));
exports.default = express_1.default
    .Router()
    .get('/product', product_controller_1.default.getAll)
    .get('/product/:productId', product_controller_1.default.getOne);
