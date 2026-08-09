class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let bool = false;
        const temp = new Set()
        for (let i = 0; i < nums.length; i++) {
            const checkNum = nums[i]
            if (temp.has(checkNum)) {
               bool = true
               break
            }
            temp.add(checkNum)
        }
        return bool;
    }
}
