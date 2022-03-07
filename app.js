// zadanie 1
//a)
// let name = 'Jan'
// b)
// let age = 22
// c)
// const isOpen = true
// d)
// let stringBoolean = 'true'
// e)
// let stringNumber = '100'

// // zadanie 2 a)
// let result = 10 / 4
// console.log(result)
// // b)
// let name = 'Tomasz'
// let age = 33
// console.log(`${name} ma ${age} lata`)
// // C)
// const firstName = 'jan'
// const lastName = ' kowalski'
// console.log(firstName + lastName)
// console.log(`${firstName}${lastName}`)

// // zadanie 3
// const number = 5
// let sum = number
// sum += 2 + 5
// console.log(sum, `${number}`)

// // zadanie 4 a)
// const table = [1, 2, 3]
// // b)
// const cars = ['Skoda', 'VW', 'Audi',]
// // c)
// const array = [true, false, true]
// // d)
// const array2 = []
// // e)
// const mix = ['Paweł', 23, true, `${number}`, null]
// // f)
// console.log(mix[1])
// // g) właściwość lenght
// const drink = ['cola', 'pepsi', 'sprite',]
// console.log(mix.length)
// // h)
// const eat = []
// eat.push(number, name)
// console.log(eat)
// // i)

// const users = [
//     {
//         name: 'Paweł',
//         surname: 'Drabato',
//         age: 31,
//     },
//     {
//         name: 'Agata',
//         surname: 'Drabato',
//         age: 33,
//     },
//     {
//         name: 'Marcelka',
//         surname: 'Drabato',
//         age: 5,
//     },
// ]
// console.log(users[1].name)

// // j)
// let dev = 2
// const arr = new Array(`${dev}`)
// console.log(arr)

// // zadanie 5 a)
// let obj = {}
// // b)
// let person1 = { name: 'Iza', }
// // c)
// let personDetails = {
//     name: 'Leon',
//     lastName: 'Drabato',
//     age: '3',
//     driverLicence: true,
//     // nie do końca kumam tworzenie zmiennych boolean
// }
// // d)
// console.log(personDetails.age)
// // e)
// console.log(personDetails)
// // f)
// const car = {
//     brand: 'VW',
//     color: 'silver',
//     year: 1999,
//     sold: [2000, 2010, 2016,],
// }

// // zadanie 6 a)
// // Przykłądy zmiennych prosty: number, string, boolean, zaś przykłady zmiennych złożonych to: objekty, tablice.
// // Główną różnicą miedy tymi zmiennmi jest to, że w prostych jak nazwa mówi podaję się konkretne proste wartośći, zaś
// // w złożonych tworzy się różne działania oparte i wykorzystujące zmienne proste.

//B)
let person = {
    name: 'Leon',
    lastName: 'Drabato',
    age: '18',
    driverLicence: true,
    drunk: Boolean(true),
}
if (person.age >= 18 && person.driverLicence === true ) {
    console.log(`${person.name} może prowadzić samochód`)
} else {
    console.log(`${person.name} nie może prowadzić samochodu`)
}

// c)

const car = {
  name: 'mustang',
  productionYear: 2020,
  color: 'red'
}
const {name, productionYear,} = car

const result = `Moje auto to ${name} i zostało wyprodukowane w roku ${productionYear}` 
console.log(result)

// d)

const isAdult = false

console.log(isAdult === true ? 'Możesz kupić alkohol' : 'Nie możesz kupić alkoholu, jesteś nieletni!')

if (isAdult === true) {
    console.log('Możesz kupić alkohol')
} else {
    console.log('Nie możesz kupić alkoholu, jesteś nieletni!')
}

if (isAdult === true)
    console.log('Możesz kupić alkohol')


if (!isAdult === true)
    console.log('Nie możesz kupić alkoholu, jesteś nieletni!')
