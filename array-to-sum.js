arr = [1,3,34256,342,56,243];

// v1
// function simpleArraySum(arr) {
//     let sum = 0;
//     for (i = 0; i<arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// // let result = simpleArraySum(arr);
// // console.log(result);

// v2
// let result = function(arr) {
//     let sum = 0;
//     for (i = 0; i<arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(result(arr));

// v3
// let result = (arr => {
//     let sum = 0;
//     for (i = 0; i<arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// });
// console.log(result(arr));

// v4
// let result = arr.reduce((acc, current) => acc + current, 0);
// console.log(result);

// v5
function simpleArraySum(arr) {
    return arr.reduce((acc, current) => acc + current,0);
}
console.log(simpleArraySum(arr));