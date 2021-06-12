const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavouritecats.com',
    'mydogs.com',
    'firstcat.com',
    'hellocat.com'
];

const googleSearch = (database,searchInput) => {
    const results = database.filter(website => {
        return website.includes(searchInput);
    })

    return results.length < 3 ? results : results.slice(0,3);
}

module.exports = googleSearch