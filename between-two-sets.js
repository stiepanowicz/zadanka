/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
const a = [2, 4];
const b = [16, 32, 96];


function getTotalX(a, b) {
    const largestInA = a.sort((x, y) => x - y).at(-1);
    const smallestInB = b.sort((x, y) => x - y).at(0);
    
    const betweenTheSets = [];
    
    for (let num = largestInA; num <= smallestInB; num++) {

        const isMultipleOfA = a.every(val => num % val === 0);
        const isFactorOfB = b.every(val => val % num === 0);
        
        isMultipleOfA && isFactorOfB ? betweenTheSets.push(num) : null;
    }

    return betweenTheSets.length;
}

console.log(getTotalX(a, b));
/* 

1. find the largest element in a
2. find the smallest element in b 
3. between these two 
4. find candidates that are all multiples of every a element
5. take valid candidates
6. and check which of these divide into every element in b
7. add them to the array 
8. return array length 

*/

