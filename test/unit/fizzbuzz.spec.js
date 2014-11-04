'use strict'

var fizzbuzz = require('../../app/fizzbuzz')

function generateAMultipleOf3Or5() {
  var num = 0
  while (num % 3 === 0 || num % 5 === 0) {
    num = Math.floor(Math.random() * 10) + 1
  }
  return num
}

describe('fizzbuzz', function () {

  var multipleOf3Or5

  before(function () {
    multipleOf3Or5 = generateAMultipleOf3Or5()
  })

  it('receives a number as its argument', function () {
    fizzbuzz.length.should.eql(1)
  })

  it('returns "fizz" if the number is divisible by 3', function () {
    fizzbuzz(3).should.eql('fizz')
    fizzbuzz(6).should.eql('fizz')
    fizzbuzz(multipleOf3Or5 * 3).should.eql('fizz')
  })

  it('returns "buzz" if the number is divisible by 5', function () {
    fizzbuzz(5).should.eql('buzz')
    fizzbuzz(10).should.eql('buzz')
    fizzbuzz(multipleOf3Or5 * 5).should.eql('buzz')
  })

  it('returns "fizzbuzz" if the number is divisible by 3 and 5', function () {
    fizzbuzz(15).should.eql('fizzbuzz')
    fizzbuzz(multipleOf3Or5 * 3 * 5).should.eql('fizzbuzz')
  })

  it('returns the number if not divisible by 3 or 5', function () {
    fizzbuzz(2).should.eql(2)
    fizzbuzz(101).should.eql(101)
  })

  it('returns false if no number is provided', function () {
    fizzbuzz().should.be.false
  })

  it('returns false if a non-numerical value is provided', function () {
    fizzbuzz('notANumber').should.be.false
  })

})