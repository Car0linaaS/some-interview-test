/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const returnArr = [];

    // Increase iterator index with step size 'size'
    for (let i = 0; i < arr.length; i +=size){
        // Extract a slice to create a subarray of length 'size'.
        // Subarray will contain the remaining elements if less than 'size' elements remain 
        subArr = arr.slice(i, i+size);
        returnArr.push(subArr);
    }

    return returnArr;
};

// Test print
let arr = [1,9,6,3,2];
size = 3;
console.log("Input array:", arr, "chunkSize:", size, "\nOutput:", chunk(arr, size), "\n");

arr = [8,5,3,2,6]; 
size = 6;
console.log("Input array:", arr, "chunkSize:", size, "\nOutput:", chunk(arr, size), "\n");

arr = [1,2,3,4,5];
size = 1;
console.log("Input array:", arr, "chunkSize:", size, "\nOutput:", chunk(arr, size), "\n");

arr = [];
size = 1;
console.log("Input array:", arr, "chunkSize:", size, "\nOutput:", chunk(arr, size), "\n");