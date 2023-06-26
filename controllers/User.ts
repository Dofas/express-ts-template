import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/User';
import ApiError from '../error/ApiError';

class UserController {
    async createUser(request: Request, response: Response) {
        try {
            const { name, email, password } = request.body;

            const userData = {
                name,
                email,
                password: await bcrypt.hash(password, 18),
            };
            const user = await User.create(userData);

            //todoне працює мідл вар на провірку чи існує юзер в баазі
            return response.status(400).send({ user });
        } catch (error) {
            return ApiError.internal(`Error in createUser controller ${error}`);
        }
    }
}

export default new UserController();
