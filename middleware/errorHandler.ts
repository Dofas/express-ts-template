import ApiError from '../error/ApiError';
import { NextFunction, Request, Response } from 'express';

export default function errorHandler(
    error: Error | ApiError,
    req: Request,
    res: Response,
    next: NextFunction,
) {
    if (error instanceof ApiError) {
        return res.status(error.status).json({ message: error.message });
    }
    return res.status(500).json('Un handled Error');
}
