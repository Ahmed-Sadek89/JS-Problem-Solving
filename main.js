// A number is said to be Disarium if 
// the sum of its digits raised to their respective positions is the number itself.
// ex: isDisarium(75) ➞ false 7^1 + 5^2 = 7 + 25 = 32
// ex: isDisarium(135) ➞ true 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135


const isDisarium = (number) => {
    const s = number.toString();
    let sum = 0
    for(let i = 1; i <= s.length; i++){
        sum = sum + Math.pow(parseInt(s[i-1]), i)
    }
    if(sum === number) {
        return true
    } else {
        return false
    }
}


console.log(isDisarium(75))
console.log(isDisarium(135))
