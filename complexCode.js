```javascript
// Filename: complexCode.js
// Content: A complex code demonstrating various JavaScript concepts and techniques

// Helper function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to generate the first 'n' Fibonacci numbers
function generateFibonacci(n) {
  let fibArray = [];
  fibArray[0] = 0;
  fibArray[1] = 1;

  for (let i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  return fibArray;
}

// Class representing a complex number with basic operations
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(complexNum) {
    return new ComplexNumber(
      this.real + complexNum.real,
      this.imaginary + complexNum.imaginary
    );
  }

  subtract(complexNum) {
    return new ComplexNumber(
      this.real - complexNum.real,
      this.imaginary - complexNum.imaginary
    );
  }

  multiply(complexNum) {
    return new ComplexNumber(
      this.real * complexNum.real - this.imaginary * complexNum.imaginary,
      this.real * complexNum.imaginary + this.imaginary * complexNum.real
    );
  }

  toString() {
    return `${this.real} + ${this.imaginary}i`;
  }
}

// A large function performing complex operations
function complexOperation() {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    sum += i;
  }

  let fibNumbers = generateFibonacci(10);
  let maxPrime = 10000;
  let primeCount = 0;

  for (let num = 2; num <= maxPrime; num++) {
    if (isPrime(num)) {
      primeCount++;
      if (primeCount === 10) break;
    }
  }

  let complexNum1 = new ComplexNumber(3, 5);
  let complexNum2 = new ComplexNumber(2, -4);
  let complexSum = complexNum1.add(complexNum2);
  let complexProduct = complexNum1.multiply(complexNum2);

  console.log("Sum of numbers 1 to 1000:", sum);
  console.log("Fibonacci numbers:", fibNumbers);
  console.log("First 10 primes:", primeCount);
  console.log("Complex number sum:", complexSum.toString());
  console.log("Complex number product:", complexProduct.toString());
}

complexOperation();
```

This code demonstrates various JavaScript concepts and techniques such as functions, loops, classes, arithmetic operations, and usage of helper functions. It includes a helper function to check for prime numbers, a function to generate Fibonacci numbers, and a class representing complex numbers with basic operations like addition and multiplication. The `complexOperation` function performs a series of complex calculations and outputs the results using `console.log`.