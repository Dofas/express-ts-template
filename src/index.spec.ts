import app from './server';
import supertest from 'supertest';

const request = supertest(app);

describe('App test', () => {
    it("should return 'Working' text", async () => {
        const response = await request.get('/');
        expect(response.body.message).toBe('Working');
    });
});
