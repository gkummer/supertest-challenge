const request = require('supertest');

var host = 'https://jsonplaceholder.typicode.com'

jest.setTimeout(30000);

test('GET / https://jsonplaceholder.typicode.com/posts/1/comments', (done) => {  
    request(host)
      .get('/posts/1/comments')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done)
});

test('POST / https://jsonplaceholder.typicode.com/posts/1/comments', (done) => {  
    return request(host)
      .post('/posts/1/comments')
      .send('postId=1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201, {
        postId: '1',
        id: 501
      },done)
});

test('GET / https://jsonplaceholder.typicode.com/albums/1/photos', (done) => {  
    request(host)
      .get('/albums/1/photos')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done)
});

test('POST / https://jsonplaceholder.typicode.com/albums/1/photos', (done) => {  
    return request(host)
      .post('/albums/1/photos')
      .send('albumId=1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201, {
        albumId: '1',
        id: 5001
      },done)
});

test('GET / https://jsonplaceholder.typicode.com/users/1/albums', (done) => {  
    request(host)
      .get('/users/1/albums')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done)
});

test('POST / https://jsonplaceholder.typicode.com/users/1/albums', (done) => {  
    return request(host)
      .post('/users/1/albums')
      .send('userId=1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201, {
        userId: '1',
        id: 101
      },done)
});

test('GET / https://jsonplaceholder.typicode.com/users/1/todos', (done) => {  
    request(host)
      .get('/users/1/todos')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done)
});

test('POST / https://jsonplaceholder.typicode.com/users/1/todos', (done) => {  
    return request(host)
      .post('/users/1/todos')
      .send('userId=1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201, {
        userId: '1',
        id: 201
      },done)
});

test('GET / https://jsonplaceholder.typicode.com/users/1/posts', (done) => {  
    request(host)
      .get('/users/1/posts')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done)
});

test('POST / https://jsonplaceholder.typicode.com/users/1/posts', (done) => {  
    return request(host)
      .post('/users/1/posts')
      .send('userId=1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201, {
        userId: '1',
        id: 101
      },done)
});

