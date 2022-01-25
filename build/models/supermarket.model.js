"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupermarketModel = void 0;
const mongoose_1 = require("mongoose");
;
;
const SupermarketSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    mainImage: { type: String, required: true },
    additionalImages: [{ type: String }],
    location: {
        street: String,
        number: Number,
        district: String,
        zip: String,
        country: String,
        city: String,
        state: String
    },
    description: String,
    phone: String
}, { timestamps: true });
exports.SupermarketModel = (0, mongoose_1.model)('Supermarket', SupermarketSchema);
