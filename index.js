// Create a function to check if two objects are equal

const checkTwoObjectsEqual = (objA, objB) => objA.a === objB.a;

console.log(checkTwoObjectsEqual({ a: 2 }, { a: 1 }));
console.log(checkTwoObjectsEqual({ a: "Hello" }, { a: 1 }));
console.log(checkTwoObjectsEqual({ a: 1 }, { a: 1 }));

console.log("-------------------------------------------------------");
