function miniMaxSum(arr) {
    let min = 0;
    let max = 0;

    let array = arr.sort();
    for (i=0; i<array.length-1; i++) {  
        // console.log(array[i]);
        min = min + array[i];
    }
    for (i=1; i<array.length; i++) {
        max = max + array[i];
    }
    console.log(`${min} ${max}`);
}
let array = [2,1,5,4,3];
miniMaxSum(array);

