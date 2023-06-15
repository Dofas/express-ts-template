import ApiError from '../error/ApiError';
import { Request, Response } from 'express';

export default function errorHandler(
    error: Error | ApiError,
    req: Request,
    res: Response,
) {
    if (error instanceof ApiError) {
        return res.status(error.status).json(error.message);
    }
    return res.status(500).json('Un handled Error');
}
