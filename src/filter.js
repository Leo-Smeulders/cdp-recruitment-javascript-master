function filterAnimalsByName(animals, filter) {
  return animals.filter(animal => animal.name.includes(filter))
}

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