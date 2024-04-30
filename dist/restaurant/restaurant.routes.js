"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const restaurant_controller_1 = __importDefault(require("./restaurant.controller"));
exports.default = express_1.default
    .Router()
    .get('/restaurant', restaurant_controller_1.default.getAll)
    .get('/restaurant/:restaurantId', restaurant_controller_1.default.getOne)
    .get('/restaurant/:restaurantId/products', restaurant_controller_1.default.getProducts);
