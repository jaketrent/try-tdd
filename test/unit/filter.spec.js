var should = require('should')

var filter = require('../../app/filter')

describe('filter', function () {

  it('exist', function () {
    should.exist(filter)
  })

  it('is a function', function () {
    (typeof filter).should.eql('function')
  })

  it('returns an array', function () {
    var actual = filter()
    Array.isArray(actual).should.be.true
  })

  it('takes a list and a condition', function () {
    filter.length.should.eql(2)
  })

  // ... other validation tests might make sense here

  it('returns an empty array when given an empty array', function () {
    var actual = filter([], function () {})
    actual.should.eql([])
  })

  it('returns empty for an array of size one that doesnt meet the condition', function () {
    var actual = filter([3], function (i) { return i % 2 === 0 })
    actual.should.eql([])
  })

  it('returns one element for an array of size one that meets the condition', function () {
    var actual = filter([2], function (i) { return i % 2 === 0 })
    actual.should.eql([2])
  })

  it('returns empty for an array of size two that doesnt meet the condition', function () {
    var actual = filter([3, 5], function (i) { return i % 2 === 0 })
    actual.should.eql([])
  })

  it('returns two elements for an array of size two that meets the condition', function () {
    var actual = filter([2, 4], function (i) {
      return i % 2 === 0
    })
    actual.should.eql([2, 4])
  })

  it('returns elements that pass the condition when failing element is first', function () {
    var actual = filter([1, 2], function (i) {
      return i % 2 === 0
    })
    actual.should.eql([2])
  })

  it('returns elements that pass the condition when passing element is first', function () {
    var actual = filter([2, 3], function (i) {
      return i % 2 === 0
    })
    actual.should.eql([2])
  })

  it('returns passing elements when in descending order', function () {
    var actual = filter([3, 2], function (i) {
      return i % 2 === 0
    })
    actual.should.eql([2])
  })

  it('handles a new condition', function () {
    var actual = filter([3, 2], function (i) {
      return i % 2 === 1
    })
    actual.should.eql([3])
  })

})