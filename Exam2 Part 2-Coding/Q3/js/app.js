function multiplesCount(nums, b) {

    return nums.filter(number => (number % b == 0)).length;

}

console.log(multiplesCount([1, 2, 3, 4, 5, 6], 3));
console.log(multiplesCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5));