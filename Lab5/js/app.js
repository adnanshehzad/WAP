"use strict";

function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

function maxofthree(x, y, z) {
    if (x > y && x > z)
        return x;
    else if (y > x && y > z) {
        return y;
    } else {
        return z;
    }
}
console.log(maxofthree(2, 2, 9))

function isVowel(x) {

    let result;
    return x.match('a|e|i|o|u') ? true : false;
}
const r = (isVowel('a'));
console.log("checking for vowels : " + r);

function sumarray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let myarr = [1, 2, 3, 4];
const res = sumarray(myarr);
console.log("sum 0f array is " + res);

function Multiplyarray(arr) {
    let mul = 1;
    for (let i = 0; i < arr.length; i++) {
        mul *= arr[i];
    }
    return mul;
}
const res1 = Multiplyarray(myarr);
console.log("Multiply result of array is " + res1);

function reverse(str) {
    let reversestring = "";
    for (let i = 0; i < str.length; i++) {
        reversestring += (str.charAt((str.length - 1) - i))
    }
    return reversestring;
}
const rev = reverse("jag testar");
console.log("Value of reverse string is :" + rev);

function findLongestWord(arrwords) {
    let maxlength = arrwords[0];
    for (let i = 1; i < arrwords.length; i++) {
        if (arrwords[i].length > maxlength.length)
            maxlength = arrwords[i];
    }
    return maxlength;
}
let arrlength = ["Thissdsdsdsds", "is", "Good", "Boy", "Handsome"];
const test = findLongestWord(arrlength);
console.log("Longest Length word is :" + test);

function filterLongWords(arr, leng) {
    let resarr = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > leng)
            resarr[count++] = arr[i];
    }
    return resarr;
}

const filterwords = filterLongWords(arrlength, 4);
console.log("Longest words from 4 characters are :" + filterwords);

const array1 = [1, 2, 3, 4];
const reducer = (accum, curr) => accum + curr;
console.log("Sum result using functional programming : " + array1.reduce(reducer));

const multiply1 = (mul, val) => mul * val;
console.log("Multiply result using functional programming : " + array1.reduce(multiply1));

//console.log("Maximum Number is : " + Math.max(...array1));

function findSecondBiggest(arr) {
    let max = arr[0];
    let min = Math.min(...array2);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            min = max;
            max = arr[i];
        } else if (arr[i] > min) {
            min = arr[i];
        }
    }
    return min;
}
let array2 = [19, 9, 11, 2, 12];
const res2 = findSecondBiggest(array2);
console.log("Second Biggest Number is :" + res2);

var fibonacci_series = function(n) {
    if (n === 1) {
        return [0, 1];
    } else {
        var s = fibonacci_series(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};
console.log(fibonacci_series(8));