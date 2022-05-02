// 1952. Three Divisors
// Easy

// 226

// 16

// Add to List

// Share
// Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

// An integer m is a divisor of n if there exists an integer k such that n = k * m.

 

// Example 1:

// Input: n = 2
// Output: false
// Explantion: 2 has only two divisors: 1 and 2.
// Example 2:

// Input: n = 4
// Output: true
// Explantion: 4 has three divisors: 1, 2, and 4.
 

// Constraints:

// 1 <= n <= 104
// Accepted
// 26,105
// Submissions
// 46,181
// Seen this question in a real interview before?

// Yes

// No

var isThree = function(n) {
    let count = 1;
    for(let i = 2; i <= n; i++){
        if(n%i===0){
           count++;
        }
        if(count > 3){
           return false;
        }
    }
    return count === 3;
};


let n = 4;
console.log(isThree(n))