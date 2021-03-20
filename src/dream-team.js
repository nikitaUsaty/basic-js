const CustomError = require('../extensions/custom-error')

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  let acronym = []
  for (let m of members) {
    if (typeof m === 'string') {
      const arr = m.trim().split('')
      acronym.push(arr[0])
    }
  }
  let res = acronym.sort().join('').toLocaleUpperCase()
  let resa = [...res].sort().join('')
  return resa
}
