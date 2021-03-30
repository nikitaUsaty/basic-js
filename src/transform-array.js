const CustomError = require('../extensions/custom-error')
// * `--discard-next` исключает следующий за ней элемент исходного массива из преобразованного массива.
// * `--discard-prev` исключает предшествующий ей элемент исходного массива из преобразованного массива.
// * `--double-next` удваивает следующий за ней элемент исходного массива в преобразованном массиве.
// * `--double-prev` удваивает предшествующий ей элемент исходного массива в преобразованном массиве.

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented')

  if (!Array.isArray(arr)) throw new Error('arr is not an Array!')

  let res = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++
    } else if (arr[i] === '--discard-prev') {
      if (res.length !== 0 && arr[i - 2] !== '--discard-next') {
        res.pop()
      }
    } else if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        res.push(arr[i + 1])
      }
    } else if (arr[i] === '--double-prev') {
      if (i > 0 && arr[i - 2] !== '--discard-next') {
        res.push(arr[i - 1])
      }
    } else {
      res.push(arr[i])
    }
  }

  return res
}
