/**
 * 
 * @param {Object} object 
 */
function displayInConsole(object) {
    console.log(JSON.stringify(object, null, 2))
}

module.exports = {
    displayInConsole
}