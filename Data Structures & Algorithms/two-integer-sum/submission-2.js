class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const temp = new Map()
        let k  = 0 
        let j =1 
        const subtractedArray = nums.map((v)=>target-v)
        for(let i = 0 ; i < nums.length ; i++){
                 temp.set(nums[i],i)
        }
        for(let i = 0 ; i < nums.length ; i++){
               j=   temp.get(subtractedArray[i])
               k =i 
            if(j && k !== j){
                break
            }
        }
        return [k,j]
    }
}
