"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const error_1 = __importDefault(require("./common/middleware/error"));
const settings_1 = __importDefault(require("./settings"));
const logger_1 = __importDefault(require("./common/logger"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
logger_1.default.info(`Starting server at port ${settings_1.default.applicationPort}!`);
require("./common/adapters/db");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use((req, res, next) => {
    if (req.originalUrl === '/api/payments/webhook') {
        next();
    }
    else {
        express_1.default.json({ limit: process.env.REQUEST_LIMIT || '20MB' })(req, res, next);
    }
});
app.use(express_1.default.text({ limit: process.env.REQUEST_LIMIT || '20MB' }));
app.use(function (req, res, next) {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '0');
    next();
});
(0, routes_1.default)(app);
app.use(error_1.default);
app.listen(settings_1.default.applicationPort);
