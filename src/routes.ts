// Libraries
import { Router } from "express";

// Controllers
import { SupermarketListingController } from "./controllers/SupermarketListingController";

// Middleware



const router = Router();

// SUPERMARKET CRUD ROUTES
// Create a new Supermarket listing
router.post('/api/v1/supermarket', new SupermarketListingController().create);

// Retrieve all Supermarket listings
router.get('/api/v1/supermarket', new SupermarketListingController().findAll);

// Retrieve a single specified Supermarket listing
router.get('/api/v1/supermarket/:supermarketId', new SupermarketListingController().findOne);

// Updates a single Supermarket listing
router.put('/api/v1/supermarket/:supermarketId', new SupermarketListingController().update);

// Deletes a single Supermarket listing
router.delete('/api/v1/supermarket/:supermarketId', new SupermarketListingController().delete);

export { router };