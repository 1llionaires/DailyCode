
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//string of word or letters, no numbers, or special char, no funny biz
//return the count of each character in the string and return it in bracket notation

function count(str){
    //create a loop through the str and add the letter as a property of the object  with value of 1
    result = {}
    for(let i=0;i<str.length;i++){
        if (result.hasOwnProperty(str[i])){
            result[str[i]]+=1
        }else{
            result[str[i]]=1
        }
    }return result
}

console.log(count('bee'),{b:1, e:2})
console.log(count('aba'),{a:2, b:1})
console.log(count(''),{})