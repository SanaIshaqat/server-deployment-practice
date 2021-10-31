'use strict';

const { app } = require('../server');
const supertest = require('supertest');
const request = supertest(app);

describe('API Server Testing', () => {

  // test if handles invalid URLs
  test('handle invalid URLS', async () => {
    const response = await request.get('/not-found');
    expect(response.status).toEqual(404);
  });

  // test if the proof of life works
  test('if theres a home route', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Server is working :D');

  });

  // test if the /data endpoint works
  test('/data endpoint works', async () => {
    const response = await request.get('/data');
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object'); // checking the type of the response 

  });
  // test if the stamper middleware works
  test('timeStamper middleware works', async () => {
    const response = await request.get('/data');
    expect(response.status).toEqual(200);
    expect(response.body.time).toBeDefined();

  });
});