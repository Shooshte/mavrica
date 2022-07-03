import * as request from 'supertest';
import { makeApp } from '../app/server';

import black_white from './fixtures/black_white';
import four_colors from './fixtures/four_colors';
import parliament_small from './fixtures/parliament_small';

describe('/api/wasabi', () => {
  const app = makeApp();
  const TEST_CASES = [
    {
      key: 'tests/black_white.png',
      result: black_white,
    },
    { key: 'tests/four_colors.png', result: four_colors },
    {
      key: 'tests/the_houses_of_parliament_small.jpg',
      result: parliament_small,
    },
  ];

  TEST_CASES.forEach(({ key, result }) => {
    it(`should return status 200 and correctly parsed colors for ${key}`, async () => {
      const response = await request(app)
        .get(`/api/wasabi/?filePath=${key}`)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200);

      expect(response.body).toEqual(result);
    });
  });

  it('should return status 404 for missing file', async () => {
    const response = await request(app)
      .get('/api/wasabi/?filePath=invalid')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(404);

    expect(response.text).toEqual('The specified key does not exist.');
  });

  it('should return status 400 for invalid/missing file path', async () => {
    const response = await request(app)
      .get('/api/wasabi/?filePath=')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400);

    expect(response.text).toEqual('Missing or invalid file path.');
  });
});
