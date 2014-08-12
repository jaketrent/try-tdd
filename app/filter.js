'use strict'

module.exports = function (list, conditionFn) {
  var filtered = []
  if (list && list.length > 0) {
    list.forEach(function (element) {
      if (conditionFn(element)) {
        filtered.push(element)
      }
    })
  }
  return filtered
}
