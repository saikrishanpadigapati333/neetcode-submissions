class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const tempS = s.split("");
        let tempT = t.split("");
        let bool = s.length === t.length;

        for (let i = 0; i < tempS.length; i++) {
            const index = tempT.indexOf(tempS[i]);
            if (index == -1) {
                bool = false;
                break;
            } else {
                 tempT.splice(index,1)

            }
        }
        return bool
    }
}
