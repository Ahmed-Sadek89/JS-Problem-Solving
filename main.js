// symbols = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000 ,
// };
// from leetcode

var romanToInt = function(s) {
    const symbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000 ,
    };
    let objectKeys = Object.keys(symbols)
    let flag;
    if ( s.length <= 15 && s.length >= 1 ) { // my chars must be in [1 -> 15]
        let sum = 0;
        for ( let i = 0; i < s.length; i++ ) {
            if ( objectKeys.includes(s[i]) ) { // check for each char i wrote, is in symbols keys
                if ( 
                    Object.assign(symbols)[s[i]] 
                    < Object.assign(symbols)[s[i+1]] 
                ) { // check if a symbol is larger or smaller than the next symbol
                    flag = Math.abs( Object.assign(symbols)[s[i]] - Object.assign(symbols)[s[i+1]] );
                    sum = sum + flag
                    i++
                } else {
                    sum= sum + Object.assign(symbols)[s[i]]
                }
            } else { // check for each char is in symbols keys
                return "symbols must be in ['I', 'V', 'X', 'L', 'C', 'D', 'M']"
            }
        }
        if ( sum >= 1 && sum <= 3999){
            return sum
        }else {
            return "your symbol value must be from 1 to 3999"  
        }
    } else {
        return 'your symbol characters must be from 1 to 15'
    }
};

console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIVMMMMMMMMMMMMMMMMM'))
console.log(romanToInt('ERQ'))

console.log(romanToInt('MMMM'))