import { SupermarketModel, SupermarketListing } from "../models/supermarket.model"

class DeleteSupermarketListingService {
    async execute(supermarketId: String) {

        const query = await SupermarketModel.findByIdAndDelete(supermarketId);

        return query;
    }
}

export { DeleteSupermarketListingService };