import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../models/User';
import ApiError from '../../error/ApiError';
import { getUserWithoutPassword } from '../../helpers/user';

class UserController {
    async createUser(request: Request, response: Response, next: NextFunction) {
        try {
            const { email, password } = request.body;

            const userData = {
                email,
                password: await bcrypt.hash(password, 18),
            };

            const createdUser = await User.create(userData);
            const createdUserWithoutPassword =
                getUserWithoutPassword(createdUser);

            return response
                .status(200)
                .send({ user: createdUserWithoutPassword });
        } catch (error) {
            return next(
                ApiError.internal(`Error in createUser controller ${error}`),
            );
        }
    }

    async getUserByEmail(
        request: Request,
        response: Response,
        next: NextFunction,
    ) {
        try {
            const email = request.params.email;

            const user = await User.findOne({
                where: {
                    email,
                },
            });

            if (!user) {
                return next(
                    ApiError.badRequest('User with that email doesnt exists'),
                );
            }

            const userWithoutPassword = getUserWithoutPassword(user);

            return response.status(200).send({ user: userWithoutPassword });
        } catch (error) {
            return next(
                ApiError.internal(`Error in createUser controller ${error}`),
            );
        }
    }
}

export default new UserController();
