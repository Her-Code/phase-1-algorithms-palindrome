
  function isPalindrome(str) {
    str = str.toLowerCase(); // Convert the string to lowercase
    let start = 0; // Initialize start pointer
    let end = str.length - 1; // Initialize end pointer
    while (start <= end) {
        if (str[start] !== str[end]) {
            return false; // If characters at start and end pointers are not equal, return false
        }
        start++; // Move start pointer forward
        end--; // Move end pointer backward
    }
    return true; // If the loop completes without returning false, return true
}

// Test Cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("Aibohphobia")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false

/* 
  Add your pseudocode here
  Function isPalindrome:
Input: a string str
Output: boolean (true if str is a palindrome, false otherwise)

1. Convert str to lowercase to ignore case sensitivity.
2. Initialize two pointers, start and end, at the beginning and end of the string, respectively.
3. While start pointer is less than or equal to end pointer:
    a. If characters at start and end pointers are not equal:
        - Return false, indicating that the string is not a palindrome.
    b. Increment start pointer.
    c. Decrement end pointer.
4. If the loop completes without returning false, return true, indicating that the string is a palindrome.
*/

 /* Add written explanation of your solution here*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
