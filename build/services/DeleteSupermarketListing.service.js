"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSupermarketListingService = void 0;
const supermarket_model_1 = require("../models/supermarket.model");
class DeleteSupermarketListingService {
    async execute(supermarketId) {
        const query = await supermarket_model_1.SupermarketModel.findByIdAndDelete(supermarketId);
        return query;
    }
}
exports.DeleteSupermarketListingService = DeleteSupermarketListingService;
