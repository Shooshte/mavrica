import * as request from 'supertest';
import { makeApp } from '../app/server';

import expectedResponse from './fixtures/wasabi';

describe('/api/wasabi', () => {
  const app = makeApp();
  jest.setTimeout(1000000);

  it('should return status 200 with the correctly parsed colors', async () => {
    const response = await request(app)
      .get(
        '/api/wasabi/?filePath=interior-design/spacejoy-YI2YkyaREHk-unsplash.jpg'
      )
      .expect(200);

    expect(response.body).toEqual(expectedResponse);
  });
});
