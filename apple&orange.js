/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

let s = 7;
let t = 11;
let a = 5;
let b = 15;
let apples = [-2, 2, 1];
let oranges = [5, -6];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const fruitLocation = function(a, b, apples, oranges) {
        const appleLocation = apples.map((apple) => {
            return a + apple;
        });
        const orangeLocation = oranges.map((orange) => {
            return b + orange;
        });
        // console.log(appleLocation, orangeLocation);
        return { appleLocation, orangeLocation };
    }
    const fallsOnHouse = function(s, t, fruitLocation) {
        let appleLocation = fruitLocation.appleLocation;
        let orangeLocation = fruitLocation.orangeLocation;
        let appleCounter = 0;
        let orangeCounter = 0;
    
        for (let i = 0; i < appleLocation.length; i++) {
            if (appleLocation[i] >= s && appleLocation[i] <= t) {
                appleCounter++;
            }
        }
        for (let i = 0; i < orangeLocation.length; i++) {
            if (orangeLocation[i] >= s && orangeLocation[i] <= t) {
                orangeCounter++;
            }
        }
        return { appleCounter, orangeCounter }
    }
    let fruitLocationArrays = fruitLocation(a, b, apples, oranges);
    let fallenOnHouse = fallsOnHouse(s, t, fruitLocationArrays)

    console.log(fallenOnHouse.appleCounter);
    console.log(fallenOnHouse.orangeCounter);
}   

countApplesAndOranges(s, t, a, b, apples, oranges);
