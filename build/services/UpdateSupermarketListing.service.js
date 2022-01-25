"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSupermarketListingsService = void 0;
const supermarket_model_1 = require("../models/supermarket.model");
class UpdateSupermarketListingsService {
    async execute(supermarketId, body) {
        const query = await supermarket_model_1.SupermarketModel.findByIdAndUpdate(supermarketId, {
            name: body.name,
            mainImage: body.mainImage,
            additionalImages: body.additionalImages,
            location: body.location,
            description: body.description,
            phone: body.phone
        }, { new: true });
        return query;
    }
    ;
}
exports.UpdateSupermarketListingsService = UpdateSupermarketListingsService;
;
