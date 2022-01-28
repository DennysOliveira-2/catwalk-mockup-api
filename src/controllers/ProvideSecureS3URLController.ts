// Libraries
import { Request, Response } from "express";
import { ProvideSecureS3URLService } from "../services/ProvideSecureS3URL.service";

// Controller
class ProvideSecureS3URLController {
    async handle(request: Request, response: Response) {
        const service = new ProvideSecureS3URLService();

        try {
            const result = await service.execute();
            return response.status(200).json({ success: true, result })
        }
        catch (err) {
            return response.status(500).json({ success: false, message: err.message });
        }
    }
}

export { ProvideSecureS3URLController };