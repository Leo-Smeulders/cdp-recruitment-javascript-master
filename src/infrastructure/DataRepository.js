const { data } = require('../../data')
const { Country } = require('../domain/Country')

/**
 * @returns {Country[]}
 */
function getData() {
    return data
}

module.exports = {
    getData
}