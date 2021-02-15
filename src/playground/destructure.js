/**********************Object destructuring **********/

// const Person = {
//     name: "Saim Ahmad",
//     age: 27,
//     location: {
//         city: "waterloo",
//         temp: -19
//     }
// }

// const {name: Naam,age} = Person
// console.log(`My name is ${Naam} and I am ${age} years old`)
// const {city = "Unknown",temp: temperature = "N/A"} = Person.location
// console.log(`I am from ${city} and the current temp is ${temperature}`)



// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };

// const {name : publisherName = 'self-published'} = book.publisher
// console.log(publisherName);



/******************Array destructuring*******************/

//const address = ["181 Lester St", "Waterloo", "Ontario", "N2L 0C2"];
//const [street, city, state, postalCode] = address;
//console.log(`I live in ${city} which is in ${state} and my street addr is ${street}`);
//const [, city, state] = address;
//console.log(`I live in ${city} which is in ${state}`);

// const address = ["181 Lester St", "Waterloo"]
// const [, , state="Ontario"] = address
// console.log(`I live in ${state}`)

const item = ['Coffee (hot)', '$2.00','$2.5','$2.75'];
const [beverage,small, med, large] = item;
console.log(`A meduim ${beverage} costs ${med}`)