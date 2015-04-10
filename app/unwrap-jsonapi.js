'use strict'

/**
 * Unwraps data from json-api format
 *
 * @see http://jsonapi.org/
 *
 * Json-api has a root attribute that you probably don't want to deal
 * with in your code.  It also wraps even singular resources in an array.
 * It's merely a serialization format for standardizing how data is passed
 * between the server and a client.  In your code, you probably want
 * the json unwrapped so you can deal with the raw model.  For example...
 *
 * For this sample input:
 *
 *    {
 *      books: [{
 *        id: 'abc123',
 *        title: 'The Adventures of Tintin Anthology'
 *      }]
 *    }
 *
 * You'd want to get this sample output:
 *
 *    {
 *      id: 'abc123',
 *      title: 'The Adventures of Tintin Anthology'
 *    }
 *
 * @param {Object} json-api object
 * @returns {Object|Array} object or array of raw model
 */
//function unwrap(json) {
//  if (!json) return
//
//  if (typeof json !== 'object') throw new Error('Only objects are allowed')
//
//  var firstKey = Object.keys(json)[0]
//  return json[firstKey][0]
//}
//
//module.exports = unwrap

module.exports = function unwrap(json) {
  if (!json) return

  if (typeof json !== 'object') throw new Error('Only objects are allowed')

  var firstKey = Object.keys(json)[0]
  return json[firstKey][0]
}



























