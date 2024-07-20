
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar,
// For example, 12321 after reversing is 12321

function isPalindrome(str) {

    // Approach 1

    let start=0;
    let length = str.length-1;
    let next = length;
    let end = Math.ceil((length)/2)
    while (start<=next) {
        if(str[start] !== str[next]){
            return false
        }
        start++
        next--       
    }
    return true 

    // Approach 2

    // let j = str.length - 1
    // for (let i = 0; i < str.length / 2; i++) {
    //     if (str[i] != str[j]) {
    //         return false;
    //     }
    //     j--;
    // }
    // return true;

    //Approach 3

    let rev = str.split("").reverse().join("");
 
    if (rev == str) {
        return true
    }
    return false

    //approach 4
        // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
        var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;

        var lowRegStr = str.toLowerCase().replace(re, '');
        // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
        // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
        // var lowRegStr = "amanaplanacanalpanama";

        // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
        var reverseStr = lowRegStr.split('').reverse().join(''); 
        // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
        // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
        // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
        // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
        // And, var reverseStr = "amanaplanacanalpanama";

        // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
        return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true


    //approach 4 for number value
        let reverse = 0;
        // Copy of the original number so that the original
        // number remains unchanged while finding the reverse
        let temp = n;
        while (temp !== 0) {
            reverse = (reverse * 10) + (temp % 10);
            temp = Math.floor(temp / 10);
        }
        // If reverse is equal to the original number, the
        // number is palindrome
        return reverse === n;
}
 
let str1 = "121";
let str2 = "madam";
let str3 = "12321";
let str4 = "A man, a plan, a canal. Panama";
console.log(isPalindrome(str1))
console.log(isPalindrome(str2))
console.log(isPalindrome(str3))
console.log(palindrome("A man, a plan, a canal. Panama"));

// Sample Input
let n = 7007;
if (checkPalindrome(n)) {
console.log("Yes");
} else {
console.log("No");
}