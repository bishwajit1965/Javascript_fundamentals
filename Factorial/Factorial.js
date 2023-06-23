// Factorial
const num = 1;
function factorial(num) {
  let result = 1;
  while (num <= 8) {
    result = result * num;
    num++;
  }
  return result;
}
const fact = factorial(num);
console.log(fact);
