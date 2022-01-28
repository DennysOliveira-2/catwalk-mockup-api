// Libraries
import { Router } from "express";
import cors from 'cors';

// Controllers
import { SupermarketListingController } from "./controllers/SupermarketListingController";
import { ProvideSecureS3URLController } from "./controllers/ProvideSecureS3URLController";

const router = Router();

// SUPERMARKET CRUD ROUTES
// Create a new Supermarket listing
router.post('/v1/supermarket', new SupermarketListingController().create);

// Retrieve all Supermarket listings
router.get('/v1/supermarket', new SupermarketListingController().findAll);

// Retrieve a single specified Supermarket listing
router.get('/v1/supermarket/:supermarketId', new SupermarketListingController().findOne);

// Updates a single Supermarket listing
router.put('/v1/supermarket/:supermarketId', new SupermarketListingController().update);

// Deletes a single Supermarket listing
router.delete('/v1/supermarket/:supermarketId', new SupermarketListingController().delete);

// Secure URL for S3 Upload Endpoint
router.get('/v1/secures3', new ProvideSecureS3URLController().handle);

export { router };