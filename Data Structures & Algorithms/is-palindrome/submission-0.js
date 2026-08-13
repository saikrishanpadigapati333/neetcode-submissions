class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        const regex = s.split(" ").join("").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let isPalindrome = true
        for(let i = 0 ; i < regex.length ; i++){

                   if(regex[i] !== regex[regex.length-i-1]){
                    isPalindrome = false
                   }
        }
        return isPalindrome 
    }
}
