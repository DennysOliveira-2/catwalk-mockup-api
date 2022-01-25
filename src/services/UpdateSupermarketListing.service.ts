import { SupermarketModel, SupermarketListing } from "../models/supermarket.model"

class UpdateSupermarketListingsService {
    async execute(supermarketId: String, body: SupermarketListing) {

        const query = await SupermarketModel.findByIdAndUpdate(supermarketId, {
            name: body.name,
            mainImage: body.mainImage,
            additionalImages: body.additionalImages,
            location: body.location,
            description: body.description,
            phone: body.phone
        }, { new: true });

        return query;
    };
};

export { UpdateSupermarketListingsService };