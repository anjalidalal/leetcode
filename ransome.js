// 383. Ransom Note
// Easy

// 1629

// 295

// Add to List

// Share
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.
// Accepted
// 364,455
// Submissions
// 653,601
// Seen this question in a real interview before?

// Yes

// No

var canConstruct = function(ransomNote, magazine) {
    for (const letter of ransomNote) {
       if (!magazine.includes(letter)) return false
       magazine = magazine.replace(letter, '')
   }
   return true
};


let ransomNote = "aa", magazine = "ab";