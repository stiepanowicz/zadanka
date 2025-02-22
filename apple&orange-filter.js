let s = 7;
let t = 11;
let a = 5;
let b = 15;
let apples = [-2, 2, 1];
let oranges = [5, -6];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const count = (fruits, tree) => fruits.filter(fruit => tree + fruit >= s && tree + fruit <= t).length;
    console.log(count(apples, a));
    console.log(count(oranges, b));
  }


//   Explanation:
// The count function calculates how many fruits land on the house by:
// Adding each fruit's distance to its tree's position (tree + fruit).
// Filtering the fruits that fall within the house range [s, t].
// Returning the count of valid fruits.
// It prints the apple and orange counts on separate lines as required.
// This solution is concise and leverages functional programming with .filter()