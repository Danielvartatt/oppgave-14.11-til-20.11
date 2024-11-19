//task 1

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(findMin([1, 6, 2, 8, -1]));

//task 2

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Hei på deg"));
//task 3

function sumRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumRange(1, 5));

//task 4
function countOccurences(str, char) {
  return str.split(char).length - 1;
}
console.log(countOccurences("Hello World!", "l"));

//task 5
function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log(removeDuplicates(["1", "1", "2", "3"]));
console.log(
  removeDuplicates(["manul", "serval", "husky", "manul", "hamster", "gorilla"])
);
