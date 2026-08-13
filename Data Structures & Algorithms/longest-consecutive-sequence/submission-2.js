class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a,b)=>a-b);
        const seen = new Map();
        let count = 0
        for (let i = 0; i < nums.length; i++) {
            const currentArr= seen.get(count)
            if (i > 0 && !seen.get(count).has(nums[i] - 1)  ) {
               count++
            }
            
            const arr = seen.get(count) || new Set()
            arr.add(nums[i])
            seen.set(count , arr);
           

        }
       
        const x = seen.values().toArray().map((a)=>a.keys().toArray()).sort((a,b)=>b.length-a.length)

        return x[0]?x[0].length:0;
    }
}
