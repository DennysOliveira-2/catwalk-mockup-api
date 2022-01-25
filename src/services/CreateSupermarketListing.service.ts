import { SupermarketModel, SupermarketListing } from "../models/supermarket.model"

class CreateSupermarketListingService {
    async execute(body: SupermarketListing) {

        // Instantiate a new Supermarket object
        const newSupermarket = new SupermarketModel({
            name: body.name,
            mainImage: body.mainImage,
            additionalImages: body.additionalImages,
            location: body.location,
            description: body.description,
            phone: body.phone
        })

        // Save into the database
        try {
            const result = await newSupermarket.save();
            return { "success": true, "message": result };
        }
        catch (err) {
            return { "success": false, "message": err.message }
        }
    }
}

export { CreateSupermarketListingService };