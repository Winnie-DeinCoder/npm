class AjWinny{
    add(a, b){
        return a+b;
    }
    subtract(a, b){
        return a-b;
    }
    multiply(a, b){
        return a*b;
    }
    divide(a, b){
        if(b===0) throw new Error("Division by zero is not allowed");
        return a/b;
    }
    modulus(a, b){
        return a%b;
    }
    power(base, exponent) {
        return Math.pow(base, exponent);
      }
    
      squareRoot(x) {
        return Math.sqrt(x);
      }
    
      cubeRoot(x) {
        return Math.cbrt(x);
      }
    
      // Trigonometric Functions (in radians)
      sin(x) {
        return Math.sin(x);
      }
    
      cos(x) {
        return Math.cos(x);
      }
    
      tan(x) {
        return Math.tan(x);
      }
    
      // Inverse Trigonometric Functions
      arcsin(x) {
        return Math.asin(x);
      }
    
      arccos(x) {
        return Math.acos(x);
      }
    
      arctan(x) {
        return Math.atan(x);
      }
    
      // Logarithmic and Exponential Functions
      logBase10(x) {
        return Math.log10(x);
      }
    
      logBaseE(x) {
        return Math.log(x); // Natural log (base e)
      }
    
      logBase(base, x) {
        return Math.log(x) / Math.log(base);
      }
    
      exponential(x) {
        return Math.exp(x); // e^x
      }
    
      // Factorial
      factorial(n) {
        if (n < 0) throw new Error("Factorial is not defined for negative numbers.");
        if (n === 0 || n === 1) return 1;
        return n * this.factorial(n - 1);
      }
    
      // Combinatorics
      combination(n, r) {
        if (r > n) throw new Error("r cannot be greater than n.");
        return this.factorial(n) / (this.factorial(r) * this.factorial(n - r));
      }
    
      permutation(n, r) {
        if (r > n) throw new Error("r cannot be greater than n.");
        return this.factorial(n) / this.factorial(n - r);
      }
    
      // Rounding Functions
      round(x) {
        return Math.round(x);
      }
    
      floor(x) {
        return Math.floor(x);
      }
    
      ceil(x) {
        return Math.ceil(x);
      }
    
      // Absolute Value
      absolute(x) {
        return Math.abs(x);
      }
    
      // Random Number Generators
      random() {
        return Math.random(); // Random number between 0 and 1
      }
    
      randomInRange(min, max) {
        return Math.random() * (max - min) + min; // Random number in a range
      }
    
      // Hypotenuse (Pythagorean theorem)
      hypotenuse(a, b) {
        return Math.hypot(a, b);
      }
    }
    
    // Export the class
    module.exports = AjWinny;
