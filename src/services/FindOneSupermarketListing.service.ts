import { SupermarketModel } from "../models/supermarket.model"

class FindOneSupermarketListingsService {
    async execute(supermarketId: String) {

        const query = SupermarketModel.findById(supermarketId);

        return query;

    }
}

export { FindOneSupermarketListingsService };