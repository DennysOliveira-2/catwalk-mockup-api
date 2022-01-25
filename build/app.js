"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
require("dotenv/config");
const app = (0, express_1.default)();
const APP_PORT = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.router);
app.use((req, res, next) => {
    console.log(`[${Date.now()}] ${req.method} ${req.path}`);
    next();
});
// Database Configuration
const mongoose_1 = __importDefault(require("mongoose"));
// Database Connection
mongoose_1.default.connect(process.env.DB_URI)
    .then(() => {
    console.log("Successfully connected to the database.");
}).catch(err => {
    console.log("Could not connect to the database. Exiting...", err);
    process.exit();
});
app.listen(APP_PORT, () => console.log(`Server is listening on port ${APP_PORT}`));
