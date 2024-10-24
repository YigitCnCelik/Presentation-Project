import request from 'supertest';
import app from '../app';

describe('Presentation API', () => {
  it('should create a new presentation', async () => {
    const res = await request(app)
      .post('/presentations')
      .send({
        name: 'Test Presentation',
        created_by: 'John Doe',
        thumbnail: 'test_thumbnail_url'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual('Test Presentation');
  });
});
