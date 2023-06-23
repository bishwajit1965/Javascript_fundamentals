// Max number in an array
const numbers = [
  1, 2, 3, 4, 5, 500, 6, 7, 700, 8, 9, 10, 11, 12, 1200, 13, 14, 15, 16, 17, 18,
  19, 20, 2000, 21,
];

function maxNumberInArray(numbers) {
  let largestNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > largestNumber) {
      largestNumber = element;
    }
  }
  console.log("The largest number of the array is: ", largestNumber);
  return largestNumber;
}
maxNumberInArray(numbers);
