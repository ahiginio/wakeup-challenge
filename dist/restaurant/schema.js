"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
const mongoose_1 = require("mongoose");
const restaurantSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true });
exports.Restaurant = (0, mongoose_1.model)('Restaurant', restaurantSchema);
