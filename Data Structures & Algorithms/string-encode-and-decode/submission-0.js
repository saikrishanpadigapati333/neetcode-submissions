class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((s) => `${s.length}#${s}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(strs) {
        const result = [];
        let i = 0;
        while (i < strs.length) {
            let j = i;
            while (strs[j] !== "#") j++;
            const len = parseInt(strs.slice(i, j));
            result.push(strs.slice(j + 1, j + 1 + len));
            i = j + 1 + len;
        }
        return result;
    }
}
