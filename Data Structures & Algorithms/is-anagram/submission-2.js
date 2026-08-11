class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const tempS = s.split("").sort();
        let tempT = t.split("").sort();
        let bool =( s.length === t.length) && (tempS.every((val,index)=> tempT[index]===val));

        
        return bool
    }
}
