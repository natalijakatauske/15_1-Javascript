console.log("labas")

// Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes
// (string: "x seconds").
// Pvz: fn(3) => "180 seconds".
const fn = (number) => number * 60 + " seconds"
console.log(fn(3))

// Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau
// nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada
// 365 dienos).
// Pvz: fn(20) => 7300.
const fn1 = (number1) => number1 * 365
console.log(fn1(20))

// Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių –
// ji grąžintų jo kvadratą.
// Pvz.: fn(5) -> 25
const fn2 = (number2) => number2 ** 2
console.log(fn2(5))

// Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius
// (aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2)
// Pvz: fn(10, 10) -> 50
const fn3 = (number3, number33) => (number3 * number33) / 2
console.log(fn3(10, 10))

// Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro
// paskutinę raidę.
// pvz. Paduodu: "Petras", grąžina "s".
const fn4 = (text) => text.charAt(text.length - 1)
console.log(fn4("Petras"))

// Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
// T.y. "Petras" -> "sartep"
const fn5 = (text) => text.split("").reverse().join("").toLowerCase()
console.log(fn5("MARIJA"))

// Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą
// skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"
const fn6 = (nums) => nums.filter(x => x < 0).sort((a, b) => b - a)[0]
console.log(fn6([-1, -100, -5, 10, 0, 11]))

// Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek
// random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "3" => [1, 6, 3].
const randomNumbers = (quant) => {
    const generateNums = []
    for (let i = 0; i < quant; i++) {
        generateNums.push(Math.floor(Math.random() * 10) + 1)
    }
    return generateNums
}
console.log(randomNumbers(3))

// Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value
// ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
// Pvz.: fn(10, 50) -> true
const sumOverHundred = (n1, n2) => (n1 + n2) > 100
console.log(sumOverHundred(50, 90))

// Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium)
// bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – 
// vardus a>z tvarka.
// Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25},
// {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20},
// {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}]
const fn10 = (array) => array.sort((a, b) => a.name > b.name ? 1 : -1).sort((a, b) => a.age - b.age)
console.log(fn10([{name: "Alfredas", age: 25}, {name: "Jonas", age: 25}, {name: "Kasparas", age: 20}]))

//Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos
// išeiginės turi būti saugomos array.)
// Pvz.: fn(new Date(2020, 12, 25)) -> true
function isHoliday(date) {
    const holiday = ["2020-01-01", "2020-05-01", "2020-12-25", "2020-12-31"]
    return holiday.some(holiday => (new Date(holiday)).getDate() === date.getDate())
}
console.log(isHoliday(new Date("2020-12-25")))

// Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės
// grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3

const missingNumber = (array1) => array1.find((x, i) => x + 1 !== array1[i+1]) + 1
console.log(missingNumber([1, 2, 4, 5]))