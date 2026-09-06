const request = require('supertest');
const app = require('../src/app');
const Contact = require('../src/models/contactModel');

describe('Contact API', () => {
  beforeAll(async () => {
    await Contact.deleteMany();
  });

  it('should create a new contact', async () => {
    const res = await request(app)
      .post('/api/contacts')
      .send({ name: 'John Doe', email: 'john@example.com', phone: '1234567890' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.data.name).toEqual('John Doe');
  });

  it('should fetch all contacts', async () => {
    const res = await request(app).get('/api/contacts');
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });
});