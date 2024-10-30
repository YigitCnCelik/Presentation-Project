import request from 'supertest';
import express from 'express';
import presentationRouter from '../routes/presentationRoutes'; // Router dosyanızı doğru yoldan içe aktarın
import { pool } from '../db/db';

const app = express();
app.use(express.json());
app.use('/presentations', presentationRouter);

// Test verilerini ayarlama
beforeAll(async () => {
  // Veritabanınızı temizleyin ve başlangıç verisi ekleyin
  await pool.query('DELETE FROM presentations');
});

describe('Presentation API', () => {
  let presentationId: number;

  test('GET /presentations - should return all presentations', async () => {
    const res = await request(app).get('/presentations');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /presentations - should create a new presentation', async () => {
    const res = await request(app)
      .post('/presentations')
      .send({
        name: 'Test Presentation',
        created_by: 'User1',
        thumbnail: 'https://via.placeholder.com/150'
      });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toBe('Test Presentation');
    expect(res.body.created_by).toBe('User1');
    
    presentationId = res.body.id; // Test sonrası bu ID'yi güncellemeler için saklayalım
  });

  test('PUT /presentations/:id - should rename a presentation', async () => {
    const res = await request(app)
      .put(`/presentations/${presentationId}`)
      .send({ name: 'Updated Presentation' });
    
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Presentation updated successfully');

    // Güncellenen sunumu kontrol et
    const updatedRes = await request(app).get(`/presentations/${presentationId}`);
  });

  test('DELETE /presentations/:id - should delete a presentation', async () => {
    const res = await request(app).delete(`/presentations/${presentationId}`);
    expect(res.statusCode).toEqual(204);
    
    // Silindikten sonra kontrol et
    const checkRes = await request(app).get(`/presentations/${presentationId}`);
    expect(checkRes.statusCode).toEqual(404);
  });
});

afterAll(async () => {
  await pool.end();
});