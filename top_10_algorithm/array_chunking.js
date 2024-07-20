/* 
    Learn to divide an array into chunks of a specified size, a vital skill for data manipulation and organization in coding tasks.
 */

//     // Size of chunk
// let chunk = 4;

// // Input array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// // Spiltted arrays
// let arr1 = arr.slice(0, chunk);
// let arr2 = arr.slice(chunk, chunk + arr.length);

// // Display Output
// console.log('Array1: ' + arr1 + '\nArray2: ' + arr2);
// console.log(arr,'arr')

// Size of aaray chunks
let chunk = 2;

// Input array
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Splitted arrays
let arr1 = arr.splice(0, chunk);
let arr2 = arr.splice(0, chunk);
let arr3 = arr.splice(0, chunk);
let arr4 = arr.splice(0, chunk);

// Display output
console.log("Array1: " + arr1);
console.log("Array2: " + arr2);
console.log("Array3: " + arr3);
console.log("Array4: " + arr4);


// let _ = require("lodash");
// let arr = [1, 2, 3, 4, 5, 6,
//     "a", "b", "c", "d"];
// console.log("Before: ", arr)

// // Making chunks of size 3
// console.log("After: ", _.chunk(arr, 3))

function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

const arr6 = [1, 2, 3, 4, 5, 6, 7];
const chunkedArray = chunkArray(arr6, 2);
console.log(chunkedArray);


function chunkWhileArray(array, chunkSize) {
    const chunks = [];
    const copyArray = Array.from(array); // Create a copy of the original array

    while (copyArray.length > 0) {
        chunks.push(copyArray.splice(0, chunkSize));
    }

    return chunks;
}

// Example usage:
const arr7 = [1, 2, 3, 4, 5, 6, 'a', 'b', 'c', 'd'];
const chunkSize = 3;
const chunks = chunkWhileArray(arr7, chunkSize);

console.log(chunks);


const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]