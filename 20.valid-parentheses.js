/* Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

 
Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false


Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	let arr = [];
	let last = [];

	for (let i=0; i<s.length; i++) {
		if (s.charAt(i) === "(" || s.charAt(i) === "[" || s.charAt(i) === "{" ) {
			arr.push(s.charAt(i));
		}
		if (s.charAt(i) === ")" || s.charAt(i) === "]" || s.charAt(i) === "}" ) {
			last = arr[arr.length-1];
			if (s.charAt(i) === ")") {
				if (last !== "(") return false;
				arr.pop();
			}
			if (s.charAt(i) === "]") {
				if (last !== "[") return false;
				arr.pop();
			}
			if (s.charAt(i) === "}") {
				if (last !== "{") return false;
				arr.pop();
			}
		}
	}	
	
	return arr.length === 0;	
};