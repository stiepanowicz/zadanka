arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]

function diagonalDifference(arr) {
    let leftToRight = [];
    let rightToLeft = [];
    for (let i=0; i<arr.length; i++) {
        leftToRight.push(arr[i][i]);
        rightToLeft.push(arr[i][arr.length - i - 1]);
    }
    function sumDiagonal(diagonal) {
        return diagonal.reduce((acc, current) => acc + current, 0);
    }
    console.log(leftToRight);
    console.log(rightToLeft);
    return Math.abs(sumDiagonal(leftToRight) - sumDiagonal(rightToLeft));
}

console.log(diagonalDifference(arr));

