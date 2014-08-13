

var should = require('should')

var unwrap = require('../../app/unwrap-jsonapi')

describe('unwrap-jsonapi', function () {

  var book = {
    id: 'abc123',
    title: 'Harry Potter 1-7'
  }
  var json = {
    books: [book]
  }

  it('exists', function () {
    should.exist(unwrap)
  })

  it('returns null if it gets null', function () {
    should.not.exist(unwrap(null))
  })

  it('throws an error on non-objects', function () {
    (function () {
      unwrap('thisIsANonObject')
    }).should.throw()
  })

  it('doesnt throw on objects', function () {
    (function () {
      unwrap(json)
    }).should.not.throw()
  })

  it('returns an object', function () {
    var actual = unwrap(json)
    should.exist(actual)
  })

  it('removes the root attribute', function () {
    var actual = unwrap(json)
    actual.should.not.have.property('books')
  })

  it('unwraps the book', function () {

    var actual = unwrap(json)
    actual.should.eql(book)
  })

  it('doesnt throw when an object has no keys')
  it('unwraps non-arrays')
  it('unwraps arrays of objects')

  // TODO: exercism.io - 1 new problem

})













