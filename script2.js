const fetch = require('node-fetch');

const fetchPeople = async (fetch) => {
    const res = await fetch('https://swapi.dev/api/people/1');

    const data = await res.json();

    return{
        name : data.name,
        birth_year : data.birth_year
    }
}

const fetchPeoplePromise = (fetch) => {
    return fetch('https://swapi.dev/api/people/1')
         .then(res => res.json())
         .then(data => {
             return{
                 name: data.name,
                 birth_year: data.birth_year
             }
         }) 
        .catch(err => console.log("Error : " + err))
}

module.exports = {
    fetchPeople,
    fetchPeoplePromise
}