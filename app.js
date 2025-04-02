const { data } = require('./data')
const { peoplesCount } = require('./src/count')
const { filterCountryMatches } = require('./src/filter')

const argument = process.argv[2]

function displayInConsole(object) {
    console.log(JSON.stringify(object, null, 2))
}

if (argument === "--count") {
    displayInConsole(data.map(country => peoplesCount(country)))
} else {
    const filter = argument.match(/--filter=(.+)/)

    if (filter !== null) {
        displayInConsole(filterCountryMatches(data, filter[1]))
    } else {
        console.error('Please use the arguments --count or --filter=your-filter')
    }
}