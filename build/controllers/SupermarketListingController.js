"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupermarketListingController = void 0;
// Services
const CreateSupermarketListing_service_1 = require("../services/CreateSupermarketListing.service");
const DeleteSupermarketListing_service_1 = require("../services/DeleteSupermarketListing.service");
const FindAllSupermarketListings_service_1 = require("../services/FindAllSupermarketListings.service");
const FindOneSupermarketListing_service_1 = require("../services/FindOneSupermarketListing.service");
const UpdateSupermarketListing_service_1 = require("../services/UpdateSupermarketListing.service");
// Controller
class SupermarketListingController {
    // POST request to create a new Supermarket Listing
    async create(request, response) {
        // Validates if body has required fields
        if (!request.body.name) {
            return response.status(400).send({
                "message": "You have to provide a name. Supermarket name cannot be null."
            });
        }
        ;
        const service = new CreateSupermarketListing_service_1.CreateSupermarketListingService();
        console.log("Requesting to create a new Supermarket Listing.");
        try {
            const result = await service.execute(request.body);
            return response.status(200).send({ success: true, result });
        }
        catch (err) {
            return response.status(500).send({ success: true, message: err.message });
        }
    }
    // GET request to find a SINGLE Supermarket Listing record
    async findOne(request, response) {
        console.log("Requesting to find a single Supermarket Listing.");
        const service = new FindOneSupermarketListing_service_1.FindOneSupermarketListingsService();
        try {
            const supermarketId = request.params.supermarketId;
            if (!supermarketId) {
                return response.json({ "success": false });
            }
            ;
            const result = await service.execute(supermarketId);
            return response.status(200).send({ success: true, result });
        }
        catch (err) {
            if (err.kind === 'ObjectId') {
                return response.status(404).send({ success: false, message: "Could not find a Supermarket with the provided ID." });
            }
            return response.status(500).send({ success: false, message: "err.message" });
        }
    }
    // GET request to find ALL Supermarket Listing records
    async findAll(request, response) {
        console.log("Requesting to find multiple Supermarket Listings.");
        const service = new FindAllSupermarketListings_service_1.FindAllSupermarketListingsService();
        try {
            const result = await service.execute();
            return response.status(200).send({ success: true, result });
        }
        catch (err) {
            return response.status(500).send({ success: false, message: err.message });
        }
    }
    // PUT request to update a specific Supermarket Listing record
    async update(request, response) {
        console.log("Requesting to update a Supermarket Listing.");
        const service = new UpdateSupermarketListing_service_1.UpdateSupermarketListingsService();
        try {
            const result = await service.execute(request.params.supermarketId, request.body);
            return response.status(200).send({ "success": true, result });
        }
        catch (err) {
            if (err.kind === 'ObjectId') {
                const errorMessage = `Could not find a Supermarket with the ID of ${request.params.supermarketId}`;
                return response.status(404).send({ "success": false, "message": errorMessage });
            }
            return response.status(500).send({ success: false, message: err.message });
        }
    }
    // DELETE request to remove a specific Supermarket Listing record
    async delete(request, response) {
        console.log("Requesting to delete a Supermarket Listing.");
        const service = new DeleteSupermarketListing_service_1.DeleteSupermarketListingService();
        try {
            const result = await service.execute(request.params.supermarketId);
            return response.json({ success: true, result });
        }
        catch (err) {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return response.status(404).send({ success: false, message: "Could not find a Supermarket with the provided ID to delete." });
            }
            return response.status(500).send({ success: true, message: err.message });
        }
    }
}
exports.SupermarketListingController = SupermarketListingController;
