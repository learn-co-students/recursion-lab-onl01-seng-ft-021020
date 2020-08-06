// Code your solution here!
function printString(string) {
  console.log(string[0]);
  if (string.length <= 1) return;
  printString(string.slice(1, string.length));
}

function reverseString(string) {
  return string === ""
    ? ""
    : reverseString(string.substr(1)) + string.charAt(0);
}

function isPalindrome(string) {
  let first = string.slice(0, 1);
  let last = string.slice(-1);
  if (first !== last) {
    return false;
  }
  if (string.length > 1) {
    isPalindrome(string.slice(1, -1));
  }
  return true;
}

function addUpTo(array, index) {
  return index < 1 ? array[index] : array[index] + addUpTo(array, index - 1);
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  } else {
    return Math.max(array.pop(), maxOf(array));
  }
}
function includesNumber(array, num) {
  if (array.length === 0) {
    return false;
  } else if (array[0] === num) {
    return true;
  } else {
    return includesNumber(array.slice(1), num);
  }
}
