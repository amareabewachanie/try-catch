const request = require('supertest')
const app = require('./testApp')
describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/test')
      .send({
        name: 'Amare Abewa',
        job: 'Programmer',
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('message')
  })
})