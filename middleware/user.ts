import { NextFunction, Request, Response } from 'express';
import { User } from '../models/User';
import ApiError from '../error/ApiError';

export async function checkUserData(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    try {
        const { name, email } = request.body;
        const userNameInDatabase = await User.findOne({
            where: {
                name,
            },
        });
        console.log('userNameInDatabase', userNameInDatabase);
        if (userNameInDatabase) {
            return ApiError.badRequest(
                'Username with that name already exists',
            );
        }

        const emailInDatabase = await User.findOne({
            where: {
                email,
            },
        });
        if (emailInDatabase) {
            return ApiError.badRequest(
                'Username with that email already exists',
            );
        }

        next();
    } catch (error) {
        ApiError.internal(`Error in checkUserData middleware ${error}`);
    }
}
