"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// Libraries
const express_1 = require("express");
// Controllers
const SupermarketListingController_1 = require("./controllers/SupermarketListingController");
// Middleware
const router = (0, express_1.Router)();
exports.router = router;
// SUPERMARKET CRUD ROUTES
// Create a new Supermarket listing
router.post('/api/v1/supermarket', new SupermarketListingController_1.SupermarketListingController().create);
// Retrieve all Supermarket listings
router.get('/api/v1/supermarket', new SupermarketListingController_1.SupermarketListingController().findAll);
// Retrieve a single specified Supermarket listing
router.get('/api/v1/supermarket/:supermarketId', new SupermarketListingController_1.SupermarketListingController().findOne);
// Updates a single Supermarket listing
router.put('/api/v1/supermarket/:supermarketId', new SupermarketListingController_1.SupermarketListingController().update);
// Deletes a single Supermarket listing
router.delete('/api/v1/supermarket/:supermarketId', new SupermarketListingController_1.SupermarketListingController().delete);
