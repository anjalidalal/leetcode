// 287. Find the Duplicate Number
// Medium

// 12192

// 1355

// Add to List

// Share
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
 

// Constraints:

// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.
 

// Follow up:

// How can we prove that at least one duplicate number must exist in nums?
// Can you solve the problem in linear runtime complexity?
// Accepted
// 749,951
// Submissions
// 1,283,472
// Seen this question in a real interview before?

// Yes

// No

var findDuplicate = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let res = -1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i-1]){
            res = nums[i];
            break;
        }
    }
    return res;
};


let nums = [3,1,3,4,2];
console.log(findDuplicate(nums))