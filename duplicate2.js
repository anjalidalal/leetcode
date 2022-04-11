// 219. Contains Duplicate II
// Easy

// 2359

// 1838

// Add to List

// Share
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105
// Accepted
// 448,127
// Submissions
// 1,103,056
// Seen this question in a real interview before?

// Yes

// No

// Problems
var containsNearbyDuplicate = function(nums, k) {
    let map = {};
      for (var i = 0; i < nums.length; i++) {
        if (map[nums[i]] >= 0 && i - map[nums[i]] <= k) return true;
        map[nums[i]] = i;
      }
      return false;
    
    };


let nums = [1,2,3,1,2,3], k = 2;

console.log(containsNearbyDuplicate(nums, k))