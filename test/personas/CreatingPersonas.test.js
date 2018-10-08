import request from 'supertest';
import jwt from 'jsonwebtoken';
import { opts } from '../../src/auth/strategies/jwt';
import app from '../../src/app';

test('Guest cannot create personas', done => {
    request(app).post('/api/v1/personas').expect(401, done);
});

test('Name field is required', done => {
    const token = jwt.sign({ sub: 1 }, opts.secretOrKey);

    request(app)
        .post('/api/v1/personas')
        .set('Authorization', `Bearer ${token}`)
        .expect(422, done);
});