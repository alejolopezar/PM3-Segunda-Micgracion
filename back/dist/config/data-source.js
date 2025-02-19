"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "0000",
    database: "pt24a",
    synchronize: true,
    logging: false,
    entities: [User_1.User],
    subscribers: [],
    migrations: [],
    dropSchema: false
});
