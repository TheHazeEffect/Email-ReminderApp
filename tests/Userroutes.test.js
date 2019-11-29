const request = require('supertest')
const app = require('../app')

let testUser = {
  firstName: "John",
  lastName: "Doe",
  email: "demo@demo.com",
}
describe('User Endpoints', () => {

  it('should create a new post', async () => {
    const res = await request(app)
      .post('/users')
      .send(testUser)
    expect(res.statusCode).toEqual(201)
    // expect(res.body).toHaveProperty('post')
  })

  it('Update user', async(done) => {
    request(app)
      .put('/users/1')
      .set('Accept', 'application/json')
      .send({
        firstName: "testing"
      })
      .expect('Content-Type', /json/)
      .expect(200, done);
  })

  it('respond with json containing a all users', async(done) => {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })

  it('respond with json containing a single user', async(done) => {
    request(app)
      .get('/users/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
  
  it('respond with succesfully deleting a user', async(done) => {
    request(app)
      .delete('/users/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/html; charset=utf-8")
      .expect(200, done);
  })

  it('respond with Unsuccessfully finding deleted user', async(done) => {
    request(app)
      .get('/users/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', "text/html; charset=utf-8")
      .expect(404, done);
  })
})
