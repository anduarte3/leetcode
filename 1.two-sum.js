/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    let arr = [];
    
    for (let i=0; i<nums.length; i++) {
        map.set(nums[i], i);
    }  
    
    for (let i=0; i<nums.length; i++) { 
        if (map.has(target-nums[i])) {
            if (i !== map.get(target-nums[i])) {
                arr.push(map.get(target-nums[i]));
                arr.push(i);
                return arr;
            }
        }
    }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
console.log(twoSum([2,5,5,11], 10));
console.log(twoSum([3,2,3], 6));