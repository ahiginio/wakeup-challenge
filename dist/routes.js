"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restaurant_routes_1 = __importDefault(require("./restaurant/restaurant.routes"));
const product_routes_1 = __importDefault(require("./product/product.routes"));
const order_routes_1 = __importDefault(require("./order/order.routes"));
function routes(app) {
    app.use('/api', [restaurant_routes_1.default, product_routes_1.default, order_routes_1.default]);
}
exports.default = routes;
