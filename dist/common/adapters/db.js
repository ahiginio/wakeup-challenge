"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("../logger"));
const settings_1 = __importDefault(require("../../settings"));
const requiresAuth = !!(settings_1.default.mongoUser && settings_1.default.mongoPassword);
if (!requiresAuth) {
    logger_1.default.info(settings_1.default);
}
const protocol = requiresAuth ? 'mongodb+srv' : 'mongodb';
const mongoAuth = requiresAuth ? `${settings_1.default.mongoUser}:${settings_1.default.mongoPassword}@` : '';
const mongoUri = `${protocol}://${mongoAuth}${settings_1.default.mongoHost}/${settings_1.default.mongoDbName}?retryWrites=true&w=majority`;
const mongoSafeUri = mongoAuth
    ? `${protocol}://{secret}@${settings_1.default.mongoHost}/${settings_1.default.mongoDbName}?retryWrites=true&w=majority`
    : mongoUri;
logger_1.default.info(`Connecting to ${mongoSafeUri} ...`);
mongoose_1.default
    .connect(mongoUri)
    .then(async () => {
    logger_1.default.info(`Connection to ${mongoSafeUri} successful`);
})
    .catch((err) => {
    logger_1.default.error(err.message);
    throw err;
});
