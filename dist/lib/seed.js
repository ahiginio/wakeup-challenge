"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("../common/logger"));
const schema_1 = require("../product/schema");
const schema_2 = require("../restaurant/schema");
const settings_1 = __importDefault(require("../settings"));
const stress_db_1 = __importDefault(require("./stress-db"));
async function connection() {
    dotenv.config({ path: __dirname + '/./../../.env' });
    const requiresAuth = !!(settings_1.default.mongoUser && settings_1.default.mongoPassword);
    if (!requiresAuth) {
    }
    const protocol = requiresAuth ? 'mongodb+srv' : 'mongodb';
    const mongoAuth = requiresAuth ? `${settings_1.default.mongoUser}:${settings_1.default.mongoPassword}@` : '';
    const mongoUri = `${protocol}://${mongoAuth}${settings_1.default.mongoHost}/${settings_1.default.mongoDbName}?retryWrites=true&w=majority`;
    const mongoSafeUri = mongoAuth
        ? `${protocol}://{secret}@${settings_1.default.mongoHost}/${settings_1.default.mongoDbName}?retryWrites=true&w=majority`
        : mongoUri;
    console.log(`Connecting to ${mongoSafeUri} ...`);
    mongoose_1.default
        .connect(mongoUri)
        .then(() => logger_1.default.info(`Connection to ${mongoSafeUri} successful`))
        .catch((err) => {
        logger_1.default.error(err.message);
        throw err;
    });
}
const seedData = async () => {
    await connection();
    await stress_db_1.default.createData();
    for (const restaurant of stress_db_1.default.restaurants) {
        await schema_2.Restaurant.create(restaurant);
    }
    await schema_1.Product.insertMany(stress_db_1.default.products);
};
seedData()
    .then(() => {
    process.exit();
})
    .catch((err) => {
    logger_1.default.error(`Error en ejecuccion: ${JSON.stringify(err)}`);
    process.exit();
});
