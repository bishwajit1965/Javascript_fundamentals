// Factorial reverse
const num = 5;
function factorial(num) {
  let result = 1;
  while (num >= 1) {
    result = result * num;
    num--;
  }
  return result;
}
const factorialOutput = factorial(num);
console.log(`Reverse factorial of ${num} is: `, factorialOutput);
