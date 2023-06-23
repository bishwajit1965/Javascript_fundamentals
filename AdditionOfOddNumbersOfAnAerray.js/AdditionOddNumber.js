// Addition of odd numbers of an array
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function getOddNumbers() {
  const oddNumbers = [];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 !== 0) {
      oddNumbers.push(element);
      sum = sum + index;
    }
  }
  console.log("Odd numbers are: ", oddNumbers);
  console.log("Sum of odd numbers are: ", sum);
}
getOddNumbers();
