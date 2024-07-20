/* 
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. For example, “act” and “cat” are anagrams of each other. An anagram does not have to have the same meaning as the original word or phrase.

 */


function checkStringsAnagram(a, b) {

    //approach 1
    // let len1 = a.length;
    // let len2 = b.length;
    // if(len1 !== len2){
    //    console.log('Invalid Input');
    //    return
    // }
    // let str1 = a.split('').sort().join('');
    // let str2 = b.split('').sort().join('');
    // if(str1 === str2){
    //    console.log("True");
    // } else { 
    //    console.log("False");
    // }


    //approach 2
    const obj = {};
    for(s of str1) {
        console.log(obj[s] )
        obj[s] = (obj[s] || 0) + 1;
    }
    console.log(obj);
    for(s of str2) {
        if(!obj[s]) {
            return false;
        } else {
            obj[s]--;
        } 
    }
    return true;
 }
 checkStringsAnagram("indian","ndiani")