const CustomError = require('../extensions/custom-error')

// Для определения возраста археологических находок широко применяется **радиоизотопный анализ**. Один из его видов — **радиоуглеродный анализ**.

// Примерный возраст образца рассчитывается при помощи измерения **соотношения** между **современной** активностью изотопа С14 и активностью этого же изотопа в **образце**.

// [Почитайте о методе](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Nuclear_Chemistry/Nuclear_Kinetics/Half-Lives_and_Radioactive_Decay_Kinetics#section_2)

// ---
// <details>

//   <summary>О расчетах</summary>
//   Вы можете использовать формулу из статьи по ссылке выше. 0.693 — это приблизительное значение натурального логарифма двойки.

// </details>

// ---

// Ваша задача — реализовать функцию `dateSample(sampleActivity)`, которая рассчитывает примерный возраст образца (в годах). Пожалуйста, используйте данные `MODERN_ACTIVITY` и `HALF_LIFE_PERIOD`.

// Параметр функции `sampleActivity` имеет тип `string`. Рассчитаный возраст образца должен иметь тип `number`. Возраст должен быть **целочисленным**. Возраст должен **округлен вверх** (при получении целого числа). В случае неправильного **типа** входного параметра или **несоответствующем** значении активности, или отсутствии аргумента функция должна вернуть `false`.

// Например:

// `dateSample('1') => 22387` (либо `22392`, в зависимости от используемой формулы)

// `dateSample('WOOT!') => false`

// Напишите ваш код в `src/carbon-dating.js`.

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

module.exports = function dateSample(sampleActivity) {
  throw new CustomError('Not implemented')
  // sampleActivity = Number(sampleActivity)
  // console.log(sampleActivity)
}
