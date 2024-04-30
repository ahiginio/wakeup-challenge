"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    restaurant: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    items: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Product' }],
    total: { type: Number, required: true },
    table: { type: Number, required: true },
    paid: { type: Boolean, required: true, default: false },
    waiter: { type: String, required: true },
}, { timestamps: true });
exports.Order = (0, mongoose_1.model)('Order', orderSchema);
