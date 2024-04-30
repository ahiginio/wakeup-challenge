"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    restaurant: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
}, { timestamps: true });
exports.Product = (0, mongoose_1.model)('Product', productSchema);
