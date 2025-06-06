/**
 * @typedef {import("../domain/Country").Person} Person
 * @typedef {import("../domain/Country").Animal} Animal
 * @typedef {import("../domain/Country").Country} Country
 */


/**
 * @param {Animal[]} animals 
 * @param {string} filter 
 * @returns {Animal[]}
 */
function filterAnimalsByName(animals, filter) {
  return animals.filter(animal => animal.name.includes(filter))
}



/**
 * @param {Person[]} people 
 * @param {string} filter 
 * @returns {Person[]}
 */
function filterPeopleMatches(people, filter) {
  return people.reduce((filteredPeople, person) => {
    const animals = filterAnimalsByName(person.animals, filter) // Filter the person's animals
    if (animals.length > 0) {
      return [...filteredPeople, { ...person, animals }] // Add the person to the returned list only if they have matching animals
    } else {
      return filteredPeople
    }
  }, [])
}

/**
 * @param {Country[]} countries 
 * @param {string} filter 
 * @returns 
 */
function filterCountryMatches(countries, filter) {
  return countries.reduce((filteredCountries, country) => {
    const people = filterPeopleMatches(country.people, filter) // Filter the country's people
    if (people.length > 0) {
      return [...filteredCountries, { ...country, people }] // Add the country to the returned list only if they have matching animals
    } else {
      return filteredCountries
    }
  }, [])
}



module.exports = {
  filterAnimalsByName,
  filterPeopleMatches,
  filterCountryMatches
}