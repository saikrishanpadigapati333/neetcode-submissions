class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const temp = new Map();
        for (let i = 0; i < nums.length; i++) {
            const count = temp.get(nums[i]) || 0;
            temp.set(nums[i], count + 1);
        }
        const arr = temp.values().toArray();
         arr.sort((a,b)=>b-a).splice(k,arr.length-k);
        const finalArr = []
        temp.forEach((value,key)=>{
            if(arr.includes(value)){
                finalArr.push(key)
            }
        })
        return finalArr
    }
}
