class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let bool = false;
        const temp = [...nums]
        for (let i = 0; i < nums.length; i++) {
            const checkNum = temp.pop();
            const find  = temp.find((a) => a === checkNum);
            console.log(find)
            if (typeof find === "number") {
                bool = true
                break;
            }
        }
        return bool;
    }
}
