/* Palindrome Number

Given an integer x, return true if x is a, and false otherwise.

 
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


Constraints:

    -231 <= x <= 231 - 1

 
Follow up: Could you solve it without converting the integer to a string?
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let n = x
    let d = 0;
    let res = 0;

    if (x < 0) return false;

    while (n) {
        d = n % 10;        
        res = (res * 10) + d;
        n = Math.floor(n / 10)
    }
        
    if (res == x) return true;
    
    return false;
};
