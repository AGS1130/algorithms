// Notice the difference between `==` and `===`

// JavaScript attemtps type corecion with `==`

console.log(5 == '5'); // JS: true, TS: Error
console.log(5 === '5'); //JS: false, TS: Error

