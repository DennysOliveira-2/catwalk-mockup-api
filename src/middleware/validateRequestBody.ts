import { Request, Response, NextFunction } from 'express';

export function validateRequestBody(request: Request, response: Response, next: NextFunction) {
    // Request Validation
    if (!request.body.name) {
        return response.status(400).send({
            "message": "You have to provide a name. Supermarket name cannot be null."
        });
    };

    return next();
};