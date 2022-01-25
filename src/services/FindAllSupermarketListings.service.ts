import { SupermarketModel, SupermarketListing } from "../models/supermarket.model"

class FindAllSupermarketListingsService {
    async execute() {
        const query = await SupermarketModel.find();

        return query;
    }
}

export { FindAllSupermarketListingsService };