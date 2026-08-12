class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;
        const numberOfZero = nums.filter((a) => a === 0).length;
        for (let i = 0; i < nums.length; i++) {
            if (numberOfZero <= 1) {
                if (nums[i]) product = product * nums[i];
            } else {
                product = 0;
            }
        }
        return nums.map((v) => {
            if (product === 0) {
                return 0;
            } else if (numberOfZero === 1) {
                if (v) {
                    return 0;
                } else {
                    return product;
                }
            } else {
                return product / v;
            }
        });
    }
}
