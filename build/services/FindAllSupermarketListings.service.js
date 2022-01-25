"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllSupermarketListingsService = void 0;
const supermarket_model_1 = require("../models/supermarket.model");
class FindAllSupermarketListingsService {
    async execute() {
        const query = await supermarket_model_1.SupermarketModel.find();
        return query;
    }
}
exports.FindAllSupermarketListingsService = FindAllSupermarketListingsService;
