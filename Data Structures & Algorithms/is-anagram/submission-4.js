class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const temp = new Map();
        let bool = s.length === t.length
        for(let i = 0 ; i< s.length ; i++){
           const count  = temp.get(s[i]) || 0
            temp.set(s[i],count+1)
        }
        // {r : 2 , a :2 , c :2 , e , k}
         for(let i = 0 ; i< t.length ; i++){
           const char  = t[i]
            const count = temp.get(char)
            if(!count){
                bool = false 
                break
            }else {
                temp.set(char,count-1)
            }

        }
        bool = bool && temp.values().every(v=> v ===0)
        return bool
    }
}
