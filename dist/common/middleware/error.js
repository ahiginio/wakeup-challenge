"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorMiddleware(err, req, res, next) {
    const errors = [{ message: err.message }];
    return res.status(err.status || 500).json({ errors });
}
exports.default = errorMiddleware;
