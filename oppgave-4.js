function countOccurences(str, char) {
  return str.split(char).length - 1;
}
console.log(countOccurences("Hello World!", "l"));
