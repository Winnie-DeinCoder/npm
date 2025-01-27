const AjWinny = require('./index.js');
const math = new AjWinny();

console.log("Addition:", math.add(5, 7));
console.log("Factorial:", math.factorial(5));
console.log("Combination:", math.combination(5, 2));
console.log("Sin(π/2):", math.sin(Math.PI / 2));
console.log("Random Number:", math.randomInRange(1, 10));
console.log("Hypotenuse (3, 4):", math.hypotenuse(3, 4));