const request = require('supertest');
const server = require('../../index');
const mockAddCard= require('../../mockdata/addcard');

beforeAll(async () => {
    // do something before anything else runs
    console.log('Jest starting!');
});

// close the server after each test
afterAll(() => {
    server.close;
    console.log('server closed!');
});

describe('basic route tests', () => {
    it('get card route GET /', async () => {
        request(server.listen())
            .get(`/card`)
            .send([])
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {

                if (err) return done.fail(err);
                expect(res.body).toBeDefined();
                expect(res.body).toBeLength(0);

                done();
            });
    });

    it('add card route POST /', async () => {
        request(server.listen())
            .post(`/card/add`)
            .send(mockAddCard.request)
            .expect('Content-Type',/json/)
            .expect(200)
            .end((err,res) => {
                if(err) return done.fail(err);

                expect(res.body).toBeDefined();
                expect(res.body.status).toEqual(mockAddCard.response.status);
                expect(res.body.data.cardHolderName).toEqual(mockAddCard.response.data.cardHolderName);
                expect(res.body.data.cardNumber).toEqual(mockAddCard.response.data.cardNumber);
                expect(res.body.data.balance).toEqual(mockAddCard.response.data.balance);
                expect(res.body.data.cardLimit).toEqual(mockAddCard.response.data.cardLimit);

                done();
            });
    });
}); 