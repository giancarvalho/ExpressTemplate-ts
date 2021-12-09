"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var pg_1 = __importDefault(require("pg"));
var Pool = pg_1["default"].Pool;
var connection = new Pool({
    connectionString: process.env.DATABASE_URL
});
exports["default"] = connection;
