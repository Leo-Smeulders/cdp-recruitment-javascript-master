/**
 * @typedef {Object} Animal
 * @property {string} name
 */

/**
 * @typedef {Object} Person
 * @property {string} name
 * @property {Animal[]} animals
 */

/**
 * @typedef {Object} Country
 * @property {string} name
 * @property {Person[]} people
 */

/**
 * @typedef {`${string} [${number}]`} NameWithCount
 */

/**
 * @typedef {Person & { name: NameWithCount }} PersonWithCount
 */

/**
 * @typedef {Country & { name: NameWithCount }} CountryWithCount
 */
