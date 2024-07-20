/* 
    Input: str = "GeeksforGeeks"
    Output: "skeeGrofskeeG"

    Input: str = "Hello"
    Output: "olleH"
 */


function reverseNumber(num){

    //approach1
    // let result = num.toString().split('').reverse().join('');
    // return result

    //approach2
    let digits = Array.from(String(num), Number);
    let reversedArray = digits.reduce((acc, digit) =>
        [digit, ...acc], []);
    return parseInt(reversedArray.join(''));

    //approach3
    if (num === 0) {
        return reversed;
    }
    return reverseFunction(Math.floor(num / 10),
        reversed * 10 + num % 10);
}

const num1 = 123456789;
console.log(reverseNumber(num1),'num1',num1)