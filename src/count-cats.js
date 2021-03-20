const CustomError = require('../extensions/custom-error')
// Ваша задача — сосчитать котов, спрятавшихся на заднем дворе (представленном в виде двумерного массива, `Array`). Коты прячутся хорошо, но их **ушки** (`"^^"`) видны очень хорошо. Ваша задача — реализовать функцию `countCats(backyard)`, которая сосчитает котов. Удачи!

// Число найденных котов должно иметь тип `number`. Если коты не найдены, функция должна вернуть `0`.

// Например:

// `countCats([
//     [0, 1, '^^'],
//     [0, '^^', 2],
//     ['^^', 1, 2]
//   ]) => 3`
module.exports = function countCats(matrix) {
  const hears = '^^'
  let result = [].concat(...matrix)
  let res = result.filter(function (e) {
    return e === '^^'
  })
  return res.length
}
