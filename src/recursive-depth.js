const CustomError = require('../extensions/custom-error')

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let digit = 1
    let max = 1

    arr.forEach((el) => {
      if (Array.isArray(el)) {
        let res = digit + this.calculateDepth(el)
        if (res > max) {
          max = res
        }
      }
    })
    return max
  }
}
