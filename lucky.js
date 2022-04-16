// 1394. Find Lucky Integer in an Array
// Easy

// 625

// 19

// Add to List

// Share
// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

// Return the largest lucky integer in the array. If there is no lucky integer return -1.



// Example 1:

// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
// Example 2:

// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
// Example 3:

// Input: arr = [2,2,2,3,3]
// Output: -1
// Explanation: There are no lucky numbers in the array.


// Constraints:

// 1 <= arr.length <= 500
// 1 <= arr[i] <= 500
// Accepted
// 68,005
// Submissions
// 106,934
// Seen this question in a real interview before?

// Yes

// No

var findLucky = function (arr) {
    var obj = {};


    for (let i of arr) {
        if (obj[i]) {
            obj[i] += 1;
        }
        else {
            obj[i] = 1;
        }
    }
    // console.log(obj)
    let maxvalue = 0;
    let count = 0;

    for (let i in obj) {
        // console.log(`${i} : ${obj[i]}`)
        if (Number(i) === obj[i]) {
            maxvalue = Math.max(Number(i), count);
            count = Number(i);
        }
    }

    if (maxvalue === 0) {
        return -1;
    }
    return maxvalue;
};



let arr = [1,,2,3,3,3]
console.log(findLucky(arr))