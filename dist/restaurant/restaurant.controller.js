"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restaurant_service_1 = __importDefault(require("./restaurant.service"));
const errorHandler_1 = require("../common/errorHandler");
class RestaurantController {
    getAll(req, res) {
        const { limit, page } = req.query;
        restaurant_service_1.default
            .getAll({ limit: Number(limit) || 15, page: Number(page) || 1 })
            .then((body) => {
            res.status(200).json(body);
        })
            .catch((err) => (0, errorHandler_1.errorHandler)(err, res));
    }
    getOne(req, res) {
        if (!req.params.restaurantId)
            throw Error('MISSING_DATA');
        restaurant_service_1.default
            .getOne(req.params.restaurantId)
            .then((body) => {
            res.status(200).json(body);
        })
            .catch((err) => (0, errorHandler_1.errorHandler)(err, res));
    }
    getProducts(req, res) {
        if (!req.params.restaurantId)
            throw Error('MISSING_DATA');
        const { limit, page, search } = req.query;
        restaurant_service_1.default
            .getProducts({
            limit: Number(limit) || 15,
            page: Number(page) || 1,
            restaurantId: req.params.restaurantId,
            search: search ? search : undefined,
        })
            .then((body) => {
            res.status(200).json(body);
        })
            .catch((err) => (0, errorHandler_1.errorHandler)(err, res));
    }
}
exports.default = new RestaurantController();
