function factorial(i) {
  if (i === 1) {
    return 1;
  }
  return i * factorial(i - 1);
}
const recursiveFactorial = factorial(6);
console.log("The recursive factorial is: ", recursiveFactorial);
