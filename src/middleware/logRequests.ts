import { Request, Response, NextFunction } from 'express';

export function logRequests(request: Request, response: Response, next: NextFunction) {

    let timestamp = Date.now()

    console.log(`[${timestamp} ${new Date(timestamp).toLocaleDateString("pt-BR")} ${new Date(timestamp).toLocaleTimeString("pt-BR")}] ${request.method} ${request.path}`)
    return next();
};