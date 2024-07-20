/* 
Identify the most frequently occurring character in a string. This algorithm is crucial for understanding character mapping and frequency analysis, which are pivotal in many coding challenges.
 */

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';
  
    for (let char of str) {
      charMap[char] = (charMap[char] || 0) +1;
    }
  
    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }
  
    return maxChar;
  }
  
  console.log(maxChar("abbbbccccd")); // Outputs: 'c'