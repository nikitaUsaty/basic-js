const CustomError = require('../extensions/custom-error')

module.exports = function countCats(matrix) {
  const hears = '^^'
  let result = [].concat(...matrix)
  let res = result.filter(function (e) {
    return e === '^^'
  })
  return res.length
}
