const assert = require('assert');
let arr = [4,4,1,-3,-1,0];

function plusMinus(arr) {
    let negative = 0;
    let positive = 0;
    let zero = 0;

    for (let i=0; i<arr.length; i++) {
        if (arr[i]>0) {
            positive++;
        } else if (arr[i]<0) {
            negative++;
        } else if (arr[i] === 0) {
            zero++;
        }
    }
    console.log((negative / arr.length).toFixed(6));
    console.log((positive / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));
}

plusMinus(arr);
