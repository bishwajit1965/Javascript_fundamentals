//Fibonacci number

const fibonacci = [0, 1];

for (let i = 2; i <= 25; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Fibonacci numbers are: ", fibonacci);
