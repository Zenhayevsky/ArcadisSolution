/* eslint-disable no-undef */
const request = require('supertest');
const app = require('./app');
const { describe } = require('node:test');
const users = require('../users.json');

describe('Test server post /createUser', () => {
  it('should get main route', async () => {
    const res = await request(app).post('/createUser').send({
      name: 'zenhateste',
      email: 'senha@teste.com',
      ocupation: 'doctora'
    });

    const userfiltred = users.filter((user) => (user.name == 'zenhateste' ));

    expect(res.statusCode).toEqual(201);
    expect(res).toHaveProperty('text');
    expect(res.text).toEqual( 'Done saving new user');
    expect(userfiltred[0]).toEqual({
      name: 'zenhateste',
      email: 'senha@teste.com',
      ocupation: 'doctora'
    });
  });
} );

describe('Test server post /createUser with no email', () => {
  it('should return error', async () => {
    const res = await request(app).post('/createUser').send({
      name: 'zenhateste',
      email: '',
      ocupation: 'doctora'
    });

    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('please, insert your personal data');
  });
} );

describe('Test server post /createUser with no name', () => {
  it('should return error', async () => {
    const res = await request(app).post('/createUser').send({
      name: '',
      email: 'senha@teste.com',
      ocupation: 'doctora'
    });

    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('please, insert your personal data');
  });
} );

describe('Test server post /createUser with no ocupation', () => {
  it('should return error', async () => {
    const res = await request(app).post('/createUser').send({
      name: 'zenhateste',
      email: 'senha@teste.com',
      ocupation: ''
    });

    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('please, insert your personal data');
  });
} );

describe('Test server get /users', () => {
  it('should get main all users un database', async () => {
    const res = await request(app).get('/users');

    expect(res.statusCode).toEqual(200);
    expect(res.body[0]).toHaveProperty('email');
    expect(res.body[0]).toHaveProperty('name');
    expect(res.body[0]).toHaveProperty('ocupation');
  });
} );

describe('Test server get /user', () => {
  it('should get 1 unic user', async () => {
    const res = await request(app).get('/user?email=senha@teste.com');

    expect(res.statusCode).toEqual(200);
    expect(res.body[0]).toHaveProperty('email');
    expect(res.body[0]).toHaveProperty('name');
    expect(res.body[0]).toHaveProperty('ocupation');
    expect(res.body[0]).toEqual({'name':'zenhateste','email':'senha@teste.com','ocupation':'doctora'});
  });
} );

describe('Test server get /user without email', () => {
  it('should get return error', async () => {
    const res = await request(app).get('/user');

    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('please, insert email');
  });
} );

describe('Test server get /user where user was not found', () => {
  it('should return the message: This user is not in database', async () => {
    const res = await request(app).get('/user?email=kdjfndskf');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('This user is not in database');
  });
} );