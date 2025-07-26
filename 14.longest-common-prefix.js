/* Longest Common Prefix 

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters if it is non-empty.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let s = "";
    let arr = [];
    let min = strs[0].length;
    let char = "";
    let res = "";

    if (strs.length === 0) return "";

    for (let i=0; i<strs.length; i++) {
        s = strs[i].split("");
        arr.push(s);

        if (strs[i].length < min) min = strs[i].length;
    }
    
    // For the first letter, travail through all the words
    // j = letters ; i = words
    for (let j=0; j<min; j++) {
        char = arr[0][j];
        for (let i=1; i<arr.length; i++) { 
            if (arr[i][j] !== char) {
                return res;  
            } 
        }
        res += char;
    }
    
    return res;
};

