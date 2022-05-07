// 1304. Find N Unique Integers Sum up to Zero
// Easy

// 1079

// 462

// Add to List

// Share
// Given an integer n, return any array containing n unique integers such that they add up to 0.

 

// Example 1:

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
// Example 2:

// Input: n = 3
// Output: [-1,0,1]
// Example 3:

// Input: n = 1
// Output: [0]
 

// Constraints:

// 1 <= n <= 1000
// Accepted
// 138,455
// Submissions
// 179,905
// Seen this question in a real interview before?

// Yes

// No

var sumZero = function(n) {
    let arr = (n % 2 == 0)?[]:[0];
        for(let i = 1; i <= Math.floor(n/2);i++){
            arr.push(i);
            arr.push(i * -1)
        }
        return arr;
    };


let n = 4;
console.log(sumZero(n))