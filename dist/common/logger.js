"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const settings_1 = __importDefault(require("../settings"));
const format = process.env.NODE_ENV == 'development'
    ? winston_1.default.format.combine(winston_1.default.format.json(), winston_1.default.format.prettyPrint())
    : winston_1.default.format.json();
const loggerWinston = winston_1.default.createLogger({
    level: settings_1.default.loggerLevel,
    format,
    transports: [new winston_1.default.transports.Console()],
});
exports.default = loggerWinston;
