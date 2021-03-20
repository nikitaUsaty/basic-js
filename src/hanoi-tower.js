const CustomError = require('../extensions/custom-error')

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = { turns: 0, seconds: 0 }
  let turns = Math.pow(2, disksNumber) - 1
  let seconds = Math.floor((turns / turnsSpeed) * 3600)

  result.turns = turns
  result.seconds = seconds
  return result
}
