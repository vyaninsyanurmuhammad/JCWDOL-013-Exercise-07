// Create a function to check if two objects are equal

// const checkTwoObjectsEqual = (objA, objB) => objA.a === objB.a;
const checkTwoObjectsEqual = (objA, objB) => JSON.stringify(objA) === JSON.stringify(objB);

console.log(checkTwoObjectsEqual({ a: 2 }, { a: 1 }));
console.log(checkTwoObjectsEqual({ a: "Hello" }, { a: 1 }));
console.log(checkTwoObjectsEqual({ a: 1 }, { a: 1 }));

console.log("-------------------------------------------------------");

// Create a function to get the intersection of two objects

const getIntersectionTwoEqual = (objA, objB) => {
    let result = {};

    for (const key in objA) {

        if (Object.hasOwn(objB, key) && objA[key] === objB[key]) {
            result[key] = objA[key];
        }
    }

    return result;
}

console.log(getIntersectionTwoEqual({ a: 1, b: 2 }, { a: 1, c: 3 }));

console.log("-------------------------------------------------------");

// Create a function to merge two array of student data and remove duplicate data

const mergeTwoStudentList = (listA, listB) => {
    let result = [];

    const hasDuplicate = (name) => result.some(student => student.name === name);

    for (const data of listA) {
        if (!hasDuplicate(data.name)) result.push(data);
    }

    for (const data of listB) {
        if (!hasDuplicate(data.name)) result.push(data);
    }

    return result;
}

mergeTwoStudentList(
    [
        { name: "Student 1", email: "student1@mail.com" },
        { name: "Student 2", email: "student2@mail.com" }
    ],
    [
        { name: "Student 1", email: "student1@mail.com" },
        { name: "Student 3", email: "student3@mail.com" }
    ]).forEach(data => console.log(data));

console.log("-------------------------------------------------------");

// Create a function that can accept input as an array of objects and switch all values into property and property into value

const switchAllValueIntoKey = (listObj) => {

    const result = [];

    for (const obj of listObj) {
        let newObj = {};
        for (const iterator in obj) {
            newObj[obj[iterator]] = iterator;
        }
        result.push(newObj);
    }

    return result;
}

switchAllValueIntoKey([{ name: "David", age: 20 }, { lamp: "LED", price: 2000 }]).forEach(data => console.log(data));

console.log("-------------------------------------------------------");

// Create a function to find a factorial number using recursion

const findFactorialNumber = (num) => (num === 0 || num === 1) ? 1 : num * findFactorialNumber(num - 1);

console.log(findFactorialNumber(5));

console.log("-------------------------------------------------------");

// Shooting Game

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        const health = Math.random() < 0.5 ? 0 : 10;
        const power = Math.random() < 0.5 ? 0 : 10;

        return { health, power };
    }

    start() {
        while (this.player1.health > 0 && this.player2.health > 0) {
            console.log("Player Status Before Shooting:");
            this.player1.showStatus();
            this.player2.showStatus();

            const item1 = this.getRandomItem();
            const item2 = this.getRandomItem();

            this.player1.useItem(item1);
            this.player2.useItem(item2);

            console.log("Player Status After Shooting:");
            this.player1.showStatus();
            this.player2.showStatus();

            this.player2.hit(this.player1.power);
            this.player1.hit(this.player2.power);

        }

        if (this.player2.health <= 0) {
            console.log(`${this.player1.name} wins!`);
        }

        if (this.player1.health <= 0) {
            console.log(`${this.player2.name} wins!`);
        }

    }
}

class Player {
    constructor(name, health = 100, power = 10) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    hit(power) {
        this.health -= power;
    }

    useItem(item) {
        this.health += item.health;
        this.power += item.power;
    }

    showStatus() {
        console.log(`|${this.name}| (Health => ${this.health}, Power => ${this.power})`);
    }
}

const terrorist = new Player("Terrorist");
const counterTerrorist = new Player("Police");

const game = new ShootingGame(terrorist, counterTerrorist);

game.start();
