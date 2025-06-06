const { peoplesCount } = require('../application/count')
const { getData } = require('../infrastructure/DataRepository')
const { filterCountryMatches } = require('../application/filter')
const { displayInConsole } = require('../interface/Display')

function handleConsoleArguments(arguments) {
    const argument = arguments[2] // If used as instruced our argument should be the second one

    if (arguments[3] !== undefined) {
        raiseConsoleError()
    } else {
        if (argument === "--count") {
            displayInConsole(getData().map(country => peoplesCount(country)))
        } else {
            const filter = argument.match(/--filter=(.+)/)

            if (filter !== null) {
                displayInConsole(filterCountryMatches(getData(), filter[1]))
            } else {
                raiseConsoleError()
            }
        }
    }
}

function raiseConsoleError() {
    console.error('Please only use the arguments --count or --filter=your-filter')
}

module.exports = {
    handleConsoleArguments
}