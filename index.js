// Code your solution here!

function printString(myString) {
    console.log(myString[0]);

    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    } else {
        return true;
    }
}

function reverseString(myString) {
    if (myString === "") {
        return ""
    } else {
        return reverseString(myString.substring(1, myString.length)) + myString[0]
    }
}

function isPalindrome(myString) {
    let len = myString.length;

    if (len <= 1) return true;
    if (myString[0] !== myString[len - 1]) return false;

    return isPalindrome(myString.slice(1, -1));
}

function addUpTo(myArray, i) {
    if (i === 0) return myArray[0];

    return addUpTo(myArray.slice(0, -1), i-1) + myArray[i];
}

function maxOf(myArray) {
    if (myArray.length == 1) return myArray[0];

    let n = maxOf(myArray.slice(1))
    if (myArray[0] > n) {
        return myArray[0];
    } else {
        return n;
    }
}

function includesNumber(myArray, n) {
    if (myArray.length === 0) return false;
    if (myArray[0] === n) return true;

    return includesNumber(myArray.slice(1), n)
}