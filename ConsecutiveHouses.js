// // Write a program to where a robber should be able to rob max amount of money from 9 houses, alarm will ring if 2 consecutive houses are robbed
// function robMaxMoney(houses) {
//     if (houses.length === 0) return 0;
//     if (houses.length === 1) return houses[0];
    
//     let dp = new Array(houses.length).fill(0);
//     dp[0] = houses[0];
//     dp[1] = Math.max(houses[0], houses[1]);
    
//     for (let i = 2; i < houses.length; i++) {
//         dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i]);
//     }
    
//     return dp[dp.length - 1];
// }

// // Example usage:
// const houses = [2, 7, 9, 3, 1, 5, 8, 6, 4];
// console.log(robMaxMoney(houses)); // Output: 24


function robMaxMoney(houses) {
    if (houses.length === 0) return 0;
    if (houses.length === 1) return houses[0];
    
    let prev1 = houses[0];
    let prev2 = Math.max(houses[0], houses[1]);
    
    for (let i = 2; i < houses.length; i++) {
        let current = Math.max(prev2, prev1 + houses[i]);
        prev1 = prev2;
        prev2 = current;
    }
    
    return prev2;
}

// Example usage:
const houses = [2, 7, 9, 3, 1, 5, 8, 6, 4];
console.log(robMaxMoney(houses)); // Output: 24