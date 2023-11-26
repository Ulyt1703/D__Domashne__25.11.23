/* Робивши перерахунок 35°C за шкалою Фаренгейта, отримаємо наступне: 25*9/5+32 = 77°F. */
let celsiusC = 35
let numberFirst = 9
let numberSecond = 5
let numberThird = 32
let fahrenheitF = celsiusC * numberFirst / numberSecond + numberThird
console.log(fahrenheitF)

/* Створимо 2 змінні, де novemberDays - це кількість всього днів в листопаді, а oneDay - кількість годин в одній добі. */
let novemberDays = 30
let oneDay = 24
/* Щоб знайти кількість годин в цьому місяці множимо кількість днів в цьому місяці на кількість годин в одній добі. */
let hoursNovember = novemberDays * oneDay
/* Далі створимо змінну minutesHour - а саме, кількість хвилин в одній годині */
let minutesHour = 60 
/* Щоб знайти кількість годин в місяці - треба кількість хвилин у одній годині помножити на кількість годин у місяці  */
let minutesNovember = hoursNovember * minutesHour
console.log(hoursNovember + ' - годин в листопаді')
console.log(minutesNovember + ' - хвилин в листопаді')

characterHealth = 100
characterEnergy = 90

characterHealth -= 40
characterEnergy -= 35
console.log(characterHealth)
console.log(characterEnergy)

let priceMarket = 400
let saleMarket = 0.10
let priceResult = priceMarket * (1 - saleMarket)
console.log(priceResult)

let numberFractional = 9.56
numberFractional = Math.floor(numberFractional)
console.log(numberFractional)

let numberDes = '3.3$'
numberDes = Number.parseFloat(numberDes)
console.log(numberDes)

let numberFull = '24$'
numberFull = Number.parseInt(numberFull)
console.log(numberFull)

let squareRoot = 121
squareRoot = Math.sqrt(squareRoot)
console.log(squareRoot)

let feer = '18'
let sum = 14
ferr = Number.parseInt(feer)
console.log(feer)
let sumString = sum.toString()
console.log(sumString)