const CustomError = require('../extensions/custom-error')

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  if (!date.getTime()) throw new Error('THROWN')
  date = date.getMonth()

  if (date == 11 || date == 0 || date == 1) return 'winter'
  if (date == 2 || date == 3 || date == 4) return 'spring'
  if (date == 5 || date == 6 || date == 7) return 'summer'
  if (date == 8 || date == 9 || date == 10) return 'fall'
}
