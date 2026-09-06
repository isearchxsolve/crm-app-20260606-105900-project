const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');

describe('Contact API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a new contact', async () => {
    const response = await request(app)
      .post('/api/contacts')
      .send({ name: 'John Doe', email: 'john@example.com' });
    expect(response.status).toBe(201);
    expect(response.body.name).toBe('John Doe');
  });

  it('should fetch all contacts', async () => {
    const response = await request(app).get('/api/contacts');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});