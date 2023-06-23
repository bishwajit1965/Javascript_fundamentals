// Reverse words

function reverseWords() {
  const string = "I am a good boy in the class";
  const words = string.split(" ");
  console.log(words);
  const result = [];
  for (let i = string.length - 1; i >= 0; i--) {
    const element = words[i];
    result.push(element);
  }
  const reversed = result.join(" ");
  console.log(reversed);
  return reversed;
}
reverseWords();
