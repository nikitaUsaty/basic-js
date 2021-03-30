const CustomError = require('../extensions/custom-error')
const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730
module.exports = function dateSample(sampleActivity) {
  const sample = Number(sampleActivity)
  if (
    sample <= 0 ||
    sample > MODERN_ACTIVITY ||
    typeof sampleActivity !== 'string' ||
    isNaN(sample)
  )
    return false

  let k = 0.693 / HALF_LIFE_PERIOD
  let LN = MODERN_ACTIVITY / sample
  let t = Math.log(LN) / k

  return Math.ceil(t)
}
