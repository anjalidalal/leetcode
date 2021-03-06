// 747. Largest Number At Least Twice of Others
// Easy

// 665

// 752

// Add to List

// Share
// You are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

 

// Example 1:

// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: 4 is less than twice the value of 3, so we return -1.
// Example 3:

// Input: nums = [1]
// Output: 0
// Explanation: 1 is trivially at least twice the value as any other number because there are no other numbers.
 

// Constraints:

// 1 <= nums.length <= 50
// 0 <= nums[i] <= 100
// The largest element in nums is unique.
// Accepted
// 154,860
// Submissions
// 342,829
// Seen this question in a real interview before?

// Yes

// No

var dominantIndex = function(nums) {
    let max = Math.max(...nums);
    let idx;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== max && nums[i] > max/2){
            return -1;
        }
        if(nums[i] === max){
            idx = i;
        }
    }
    return idx;
};

let nums = [1,2,3,4];

console.log(dominantIndex(nums))