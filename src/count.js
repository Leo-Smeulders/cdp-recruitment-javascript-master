function animalsCount(person) {
    return {
        name: `${person.name} [${person.animals.length}]`, animals: person.animals
    }
}

function peoplesCount(country) {
    return {
        name: `${country.name} [${country.people.length}]`, people: country.people.map(person => animalsCount(person))
    }
}

module.exports = {
    animalsCount,
    peoplesCount
}