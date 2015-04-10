// TODO: write a spec for unwrap-jsonapi src before you implement it

'use strict'

var should = require('should')

// le subject under test
var unwrap = require('../../app/unwrap-jsonapi')

describe('unwrap-jsonapi', function () {

  // SUCH HINTERY:
  // think of the most basic, simple cases to start with:
  // - what does the function look like?
  // - remember the first test in fizzbuzz?
  // - what happens when you pass in nothing?
  // - what happens when you pass in an empty object?
  // ...

  // A test musing...
  // Thinking of testing unit boundaries, they say
  // that the interesting numbers are -1, 0, 1, and
  // infinity.  Interesting, yes?

  // other possibilities...
  // singular objects
  // multiple objects

  it('receives an object as its parameter', function () {
    unwrap.length.should.eql(1)
  })

  it('returns nothing when I pass nothing', function () {
    should.not.exist(unwrap())
  })

  it('returns an object if something is passed in', function () {
    var json = {
      books: [{}]
    }
    unwrap(json).should.be.type('object')
  })

  it('returns an error if a non-object is passed in', function () {
    (function () { unwrap(1234) }).should.throw()
  })

  it('removes the root attribute', function () {
    var json = {
      books: [{
        id: 'abc123',
        title: 'The Adventures of Tintin Anthology'
      }]
    }
    var output = unwrap(json)
    output.should.not.have.property('books')
  })

  it('removes the root attribute no matter what it\'s called', function () {
    var expected = {
      id: 'abc123',
      title: 'The Adventures of Tintin Anthology'
    }
    var json = {
      someOtherAttribute: [expected]
    }
    var output = unwrap(json)
    output.should.eql(expected)
  })

  it('removes the array', function () {
    var json = {
      books: [{
        id: 'abc123',
        title: 'The Adventures of Tintin Anthology'
      }]
    }
    var expected = {
      id: 'abc123',
      title: 'The Adventures of Tintin Anthology'
    }
    var output = unwrap(json)
    output.should.eql(expected)
  })


})

