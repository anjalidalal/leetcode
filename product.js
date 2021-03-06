// 713. Subarray Product Less Than K
// Medium

// 3805

// 132

// Add to List

// Share
// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.



// Example 1:

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:

// Input: nums = [1,2,3], k = 0
// Output: 0


// Constraints:

// 1 <= nums.length <= 3 * 104
// 1 <= nums[i] <= 1000
// 0 <= k <= 106
// Accepted
// 159,802
// Submissions
// 366,382
// Seen this question in a real interview before?

// Yes

// No


// Problems

// var numSubarrayProductLessThanK = function (nums, k) {

//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             let subArr = []
//             for (let k = i; k <= j; k++) {
//                 subArr.push(nums[k])
//             }
//             if (maximumProduct(subArr, k)) {
//                 count++;
//             }
//         }
//     }
//     return count;
// };

// function maximumProduct(subArr, k) {
//     if (subArr != "") {
//         let product = 1;

//         for (let i = 0; i < subArr.length; i++) {
//             product *= subArr[i];
//         }
//         if (product < k) {
//             return true
//         }
//     }
//     return false;
// }



var numSubarrayProductLessThanK = function(nums, k) {
    if(k <= 1) {return 0};

    let product = 1;
    let left = 0; right = 0, result = 0;

    while(right < nums.length){
        product *= nums[right];

        while(product >= k){
            product /= nums[left]
            left += 1
        }

        result += (right - left + 1)

        right += 1
    }
    
    return result
};

let nums = [1,2,3], k = 0

console.log(numSubarrayProductLessThanK(nums, k))
