import { User } from '../models/User';

export function getUserWithoutId(user: User) {
    return {
        name: user.name,
        email: user.email,
    };
}
