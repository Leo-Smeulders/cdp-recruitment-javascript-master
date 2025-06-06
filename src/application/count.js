/**
 * @typedef {import("../domain/Country").Person} Person
 * @typedef {import("../domain/Country").PersonWithCount} PersonWithCount
 * @typedef {import("../domain/Country").Country} Country
 * @typedef {import("../domain/Country").CountryWithCount} CountryWithCount
 */

/**
 * 
 * @param {Person} person
 * @returns {PersonWithCount}
 */
function animalsCount(person) {
    return {
        name: `${person.name} [${person.animals.length}]`, animals: person.animals
    }
}


/**
 * 
 * @param {Country} Country 
 * @returns {CountryWithCount}
 */
function peoplesCount(country) {
    return {
        name: `${country.name} [${country.people.length}]`, people: country.people.map(person => animalsCount(person))
    }
}

module.exports = {
    animalsCount,
    peoplesCount
}