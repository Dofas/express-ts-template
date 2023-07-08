import app from '../../src/server';
import supertest from 'supertest';
import { User } from '../../models/User';
import { CreateOptions, FindOptions, Optional } from 'sequelize';

const request = supertest(app);

const fakeDatabase = {
    users: [
        {
            email: 'testuser@gmail.com',
            password: 'asfthr3wr3r4t34t',
        },
    ],
};

function mockFindOne(options?: FindOptions<User> | undefined) {
    const { where } = options || {};
    const { email } = where as { email: string };
    const searchedUser = fakeDatabase.users.find((usr) => usr.email === email);
    return Promise.resolve((searchedUser as User) || null);
}

function mockCreate(
    values?: Optional<any, string> | undefined,
    options?: CreateOptions<User> | undefined,
) {
    const user = { ...values } as User;
    return Promise.resolve(user);
}

describe('User Controller tests', () => {
    it('should create a new User and send response to client', async () => {
        jest.spyOn(User, 'findOne').mockImplementation(mockFindOne);
        jest.spyOn(User, 'create').mockImplementation(mockCreate);

        const newUser = {
            email: 'testuser2@gmail.com',
            password: 'testpass',
        };
        const response = await request
            .post('/api/user/create')
            .send(newUser)
            .expect(200);

        const expectedUser = {
            email: newUser.email,
        };
        expect(response.body).toEqual({ user: expectedUser });
    });

    it('should return User to client', async () => {
        jest.spyOn(User, 'findOne').mockImplementation(mockFindOne);

        const response = await request
            .get('/api/user/get/testuser@gmail.com')
            .expect(200);

        const expectedUser = {
            email: 'testuser@gmail.com',
        };
        expect(response.body).toEqual({ user: expectedUser });
    });

    it('should return error with no existing user to client', async () => {
        jest.spyOn(User, 'findOne').mockImplementation(mockFindOne);

        await request.get('/api/user/get/testuser2').expect(404);
    });
});
