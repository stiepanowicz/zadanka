/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingRecords(scores) {
    let recordBreaks = [0,0];
    let maxScore = scores[0];
    let minScore = maxScore;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            recordBreaks[0]++;
        }
        if (scores[i] < minScore) {
            minScore = scores[i];
            recordBreaks[1]++;
        }
    }
    // Write your code here
    return recordBreaks;
}


function breakingRecordsV2(scores) {
    let max = scores[0], min = scores[0], recordBreaks = [0, 0];

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) recordBreaks[0]++, max = scores[i];
        else if (scores[i] < min) recordBreaks[1]++, min = scores[i];
    }
    
    return recordBreaks;
}
console.log(breakingRecords(scores))