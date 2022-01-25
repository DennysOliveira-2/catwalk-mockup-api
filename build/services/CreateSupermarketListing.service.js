"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSupermarketListingService = void 0;
const supermarket_model_1 = require("../models/supermarket.model");
class CreateSupermarketListingService {
    async execute(body) {
        // Instantiate a new Supermarket object
        const newSupermarket = new supermarket_model_1.SupermarketModel({
            name: body.name,
            mainImage: body.mainImage,
            additionalImages: body.additionalImages,
            location: body.location,
            description: body.description,
            phone: body.phone
        });
        // Save into the database
        try {
            const result = await newSupermarket.save();
            return { "success": true, "message": result };
        }
        catch (err) {
            return { "success": false, "message": err.message };
        }
    }
}
exports.CreateSupermarketListingService = CreateSupermarketListingService;
