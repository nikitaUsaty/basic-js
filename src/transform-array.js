const CustomError = require('../extensions/custom-error')
// * `--discard-next` исключает следующий за ней элемент исходного массива из преобразованного массива.
// * `--discard-prev` исключает предшествующий ей элемент исходного массива из преобразованного массива.
// * `--double-next` удваивает следующий за ней элемент исходного массива в преобразованном массиве.
// * `--double-prev` удваивает предшествующий ей элемент исходного массива в преобразованном массиве.
module.exports = function transform(arr) {
  throw new CustomError('Not implemented')
  // if (!Array.isArray) return false
  // let arr2 = arr
  // let arr3 = arr
  // arr2.map((i) => {
  //   if (arr2[i] == '--double-next') {
  //     let res = arr2.toString().replace('--double-next', i + 1)
  //     return (arr3 = res.split(','))
  //   }
  //   return console.log(arr3)
  // })
  // for (let i = 0; i < arr2.length; i++) {
  //   if (arr2[i] == '--double-next') {
  //     return arr2.splice(i, 1, arr2[i + 1])
  //   }
  // }
}
