"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequestBody = void 0;
function validateRequestBody(request, response, next) {
    // Request Validation
    if (!request.body.name) {
        return response.status(400).send({
            "message": "You have to provide a name. Supermarket name cannot be null."
        });
    }
    ;
    return next();
}
exports.validateRequestBody = validateRequestBody;
;
