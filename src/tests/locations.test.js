const request =  require('supertest');
const Location = require('../models/Location');
const app =  require('../../server');

const baseRoute = 'http://localhost:3000/api'

describe('Population Management API', () => {
    let savedLocation;
    beforeAll(async () => {
        console.log('**********************');
        await Location.remove();
    });

    it('should return welcome message', done => {
        request(app)
            .get('/')
            .end((error, response) => {
                expect(response.status).toBe(200);
                expect(response.body.message).toBe(
                    'Welcome to location Management!'
                );
                done();
            });
    });

    it('should create a location', done => {
        request(app)
            .post('/api/locations')
            .send({
                name: 'Abuja',
                male: 300,
                female: 200
            })
            .end((err, res) => {
                if (err) done(err);
                
                const { message, success, data } = res.body;
                expect(res.status).toBe(201);
                expect(success).toBe(true);
                expect(message).toBe('Location created');
                expect(data.name).toBe('Abuja');
                savedLocation = res.body.data;
                done();
            });
    });

    it('should not add a location if it exists', done => {
        request(app)
            .post(`/api/locations`)
            .send({
                name: 'Abuja',
                maleCount: 100,
                femaleCount: 200
            })
            .end((err, res) => {
                if (err) done(err);
                expect(res.statusCode).toBe(500);
                expect(res.body.success).toBe(false);
                done();
            });
    });

    it('should return a list of locations and their population', done => {
        request(app)
            .get(`/api/locations`)
            .end((err, res) => {
                if (err) done(err);
                expect(res.statusCode).toBe(200);
                expect(res.body.success).toBe(true);
                expect(res.body.message).toBe('Locations retrived');
                done();
            });
    });

    it('should get a single location and its population', done => {
        request(app)
            .get(`/api/locations/${savedLocation._id}`)
            .end((err, res) => {
                if (err) done(err);
                const { data, message, success } = res.body;
                expect(res.status).toBe(200);
                expect(success).toBe(true);
                expect(data.male).toBe(300);
                expect(message).toBe('Location retrived');
                done();
            });
    });

    it('should update a location and its population', done => {
        request(app)
            // eslint-disable-next-line no-underscore-dangle
            .put(`/api/locations/${savedLocation._id}`)
            .send({
                maleCount: 500,
                femaleCount: 200
            })
            .end((err, res) => {
                if (err) done(err);
                const { data, message, success } = res.body;
                expect(res.status).toBe(200);
                expect(success).toBe(true);
                expect(data.male).toBe(300);
                expect(message).toBe('Location updated');
                done();
            });
    });

    it('should delete a location and its population', done => {
        request(app)
            .delete(`/api/locations/${savedLocation._id}`)
            .end((err, res) => {
                if (err) done(err);
                const { message, success } = res.body;
                expect(res.status).toBe(200);
                expect(success).toBe(true);
                expect(message).toBe('Location deleted');
                done();
            });
    });

    it('should not update a location that does not exists', done => {
        request(app)
            .put(`/api/locations/${savedLocation._id}`)
            .send({
                name: 'Lao',
                maleCount: 100,
                femaleCount: 200
            })
            .end((err, res) => {
                if (err) done(err);
                expect(res.status).toBe(404);
                expect(res.body.success).toBe(false);
                expect(res.body.message).toBe('Location not found');
                done();
            });
    });

});
