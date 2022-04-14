// 1832. Check if the Sentence Is Pangram
// Easy

// 703

// 18

// Add to List

// Share
// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false
 

// Constraints:

// 1 <= sentence.length <= 1000
// sentence consists of lowercase English letters.
// Accepted
// 80,011
// Submissions
// 98,232
// Seen this question in a real interview before?

// Yes

// No

var checkIfPangram = function(s) {
    let letterSet = new Set(s)
     return letterSet.size === 26
 };


let  sentence = "leetcode";

console.log(checkIfPangram(s))