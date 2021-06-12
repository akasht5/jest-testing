const swapi = require('./script2');
const fetch = require('node-fetch');

it('testing fetchPeoplePromise',(done) => {
    swapi.fetchPeoplePromise(fetch).then((data) => {
        expect.assertions(1);
        expect(data.name).toBe('Luke Skywalker')
        done();
    })
})

it('testing fetchPeople',(done) => {
    swapi.fetchPeople(fetch).then((data) => {
        expect.assertions(1);
        expect(data).not.toBeUndefined()
        done();
    })
})

it('Mocking fetchPeople test',() => {
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            name: 'Luke Skywalker',
            birth_year: '19BBY'
        })
    }))

    expect.assertions(3);
    return swapi.fetchPeoplePromise(mockFetch).then(data => {
        expect(data).toEqual({
            name: 'Luke Skywalker',
            birth_year: '19BBY'
        })
        expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people/1');
        expect(mockFetch.mock.calls.length).toBe(1);
    })
})