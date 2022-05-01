// 1979. Find Greatest Common Divisor of Array
// Easy

// 363

// 16

// Add to List

// Share
// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

 

// Example 1:

// Input: nums = [2,5,6,9,10]
// Output: 2
// Explanation:
// The smallest number in nums is 2.
// The largest number in nums is 10.
// The greatest common divisor of 2 and 10 is 2.
// Example 2:

// Input: nums = [7,5,6,8,3]
// Output: 1
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 8.
// The greatest common divisor of 3 and 8 is 1.
// Example 3:

// Input: nums = [3,3]
// Output: 3
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 3.
// The greatest common divisor of 3 and 3 is 3.
 

// Constraints:

// 2 <= nums.length <= 1000
// 1 <= nums[i] <= 1000
// Accepted
// 40,295
// Submissions
// 51,744
// Seen this question in a real interview before?

// Yes

// No

var findGCD = function(nums) {
    nums.sort((a,b) => a-b)
     for(let i = nums.length-1; i >= 0; i--){
         if(nums[0] % i == 0 && nums[nums.length-1] % i == 0){
             return i
         }
     }
     return 0;

    // second solution 
    
    // let min = Math.min(...nums);
    // let max = Math.max(...nums)
    // let result = 1;
    // let i = 2;
  
    // while (min >= 2 && i <= max) {
    //   if (min % i === 0 && max % i === 0) {
    //     result = i;
    //   }
    //   i++;
    // }
    // return result;
};


let  nums = [2,5,6,9,10];
console.log(findGCD(nums))