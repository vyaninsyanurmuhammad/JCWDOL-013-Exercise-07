// Create a function to check if two objects are equal

const checkTwoObjectsEqual = (objA, objB) => objA.a === objB.a;

console.log(checkTwoObjectsEqual({ a: 2 }, { a: 1 }));
console.log(checkTwoObjectsEqual({ a: "Hello" }, { a: 1 }));
console.log(checkTwoObjectsEqual({ a: 1 }, { a: 1 }));

console.log("-------------------------------------------------------");

// Create a function to get the intersection of two objects

const getIntersectionTwoEqual = (objA, objB) => {
    let result = {};

    for (const key in objA) {

        if (objB.hasOwnProperty(key) && objA[key] === objB[key]) {
            result[key] = objA[key];
        }
    }

    return result;
}

console.log(getIntersectionTwoEqual({ a: 1, b: 2 }, { a: 1, c: 3 }));

console.log("-------------------------------------------------------");
