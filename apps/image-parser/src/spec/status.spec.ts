import * as request from 'supertest';
import { makeApp } from '../app/server';

describe('/api/status', () => {
  const app = makeApp();

  it('should return status 200 with the correct message', async () => {
    const response = await request(app)
      .get('/api/status')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect('Content-Length', '25')
      .expect(200);

    expect(response.text).toEqual('Server is up and running!');
  });
});
