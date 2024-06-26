//Plain old Javascript
const key  = "species";
const pet = { species: 'Dog', age: 2, name: 'mydog'}
// console.log(pet[key]); //evalutes to 'Dog'
// console.log(pet.key); //evalutes to undefined, - Properties that don’t exist evaluate to undefined.

const obj = {};
obj[1] = "Hello";
obj["1"] = "world";
//All object keys in JS gets stringified. So here in the example obj[1] and obj["1"] will have the same value in JS obj
//Here obj[1] will get stringified and converted to obj["1"]
console.log(obj[1]);
console.log(obj["1"]);