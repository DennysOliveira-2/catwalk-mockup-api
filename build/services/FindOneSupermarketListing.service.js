"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOneSupermarketListingsService = void 0;
const supermarket_model_1 = require("../models/supermarket.model");
class FindOneSupermarketListingsService {
    async execute(supermarketId) {
        const query = supermarket_model_1.SupermarketModel.findById(supermarketId);
        return query;
    }
}
exports.FindOneSupermarketListingsService = FindOneSupermarketListingsService;
