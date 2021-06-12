const googleSearch = require('./script');
const num = undefined;

const dbmock = [
    "apple.com",
    "google.com",
    "amazon.com",
    "facebook.com",
    "netflix.com"
];

describe('googleSearch',() => {
    it('This is cat test',() => {
        expect(2).toBeLessThan(3);
    })

    it('Another cat test',() => {
        expect(num).toBeUndefined();
    })

    it('testing googleSearch',() => {
        expect(googleSearch(dbmock,'test')).toEqual([]);
        expect(googleSearch(dbmock,'book')).toEqual(['facebook.com']);
    })

    it('test for returning max 3 values',() => {
        expect(googleSearch(dbmock,'.com')).toHaveLength(3);
    })

    it('testing with undefined and null',() => {
        expect.assertions(2);
        expect(googleSearch(dbmock,undefined)).toEqual([]);
        expect(googleSearch(dbmock,null)).toEqual([]);
    })
})