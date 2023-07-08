import { User } from '../models/User';

export function getUserWithoutPassword(user: User) {
    return {
        email: user.email,
    };
}
