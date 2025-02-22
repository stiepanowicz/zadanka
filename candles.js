// function birthdayCakeCandles(candles) {
//     let sorted = candles.sort((a, b) => a - b);
//     let filtered = sorted.filter((number) => number == sorted.slice(-1));
//     return filtered.length;
// }

// function birthdayCakeCandles(candles) {
//     return (candles.sort((a, b) => a - b).filter((number) => number == candles.slice(-1))).length;
// }

function birthdayCakeCandles(candles) {
    let max =0, count = 0;

    for (let candle of candles) {
        if (candle > max) {
            max = candle;
            count = 1;
        } else if (candle === max) {
            count++
        }
    }
    
    return count;
}
let candles = [1,2,2,4];

console.log(birthdayCakeCandles(candles));
