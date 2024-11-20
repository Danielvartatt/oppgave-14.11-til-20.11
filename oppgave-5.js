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
