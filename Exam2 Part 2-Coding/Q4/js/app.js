const calculateAverage = function(arr) {
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length
    console.log("Average of Array is " + avg);
}
let array1 = [1, 2, 3];
let array2 = [1, 2, 3, 4];
let array3 = [1, 2, 3, 4, 5, 16.6];

calculateAverage(array1);
calculateAverage(array2);
calculateAverage(array3);