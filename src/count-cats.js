const CustomError = require('../extensions/custom-error')

module.exports = function countCats(matrix) {
  let result = [].concat(...matrix)
  let res = result.filter(function (e) {
    return e === '^^'
  })
  return res.length
}
