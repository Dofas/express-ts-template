import { NextFunction, Request, Response } from 'express';
import { User } from '../models/User';
import ApiError from '../error/ApiError';

export async function checkUserData(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        if (request.method === 'OPTIONS') {
            next();
        }

        const { email } = request.body;
        const emailInDatabase = await User.findOne({
            where: {
                email,
            },
        });
        if (emailInDatabase) {
            return next(
                ApiError.badRequest('Username with that email already exists'),
            );
        }

        next();
    } catch (error) {
        return next(
            ApiError.internal(`Error in checkUserData middleware ${error}`),
        );
    }
}
