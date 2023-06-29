import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../models/User';
import ApiError from '../../error/ApiError';
import { getUserWithoutId } from '../../helpers/user';

class UserController {
    async createUser(request: Request, response: Response, next: NextFunction) {
        try {
            const { name, email, password } = request.body;

            const userData = {
                name,
                email,
                password: await bcrypt.hash(password, 18),
            };

            await User.create(userData);

            return response.status(400).send({ name, email });
        } catch (error) {
            return next(
                ApiError.internal(`Error in createUser controller ${error}`),
            );
        }
    }

    async getUserByName(
        request: Request,
        response: Response,
        next: NextFunction,
    ) {
        try {
            const name = request.params.name;

            const user = await User.findOne({
                where: {
                    name,
                },
            });

            if (!user) {
                return next(
                    ApiError.badRequest('User with that name doesnt exists'),
                );
            }

            const userWithoutPassword = getUserWithoutId(user);

            return response.status(400).send({ user: userWithoutPassword });
        } catch (error) {
            return next(
                ApiError.internal(`Error in createUser controller ${error}`),
            );
        }
    }
}

export default new UserController();
