import request from 'supertest';
import service from '../index';

describe('Good Home Routes', function () {
  afterAll(() => {
    service.server.close();
  });

  it('responds to /', async () => {
    const res = await request(service.app).get('/').set('Accept', 'application/json');
    expect(res.statusCode).toBe(200);
    expect(res.body.data).toEqual('Hello');
  });
});
