let string = "JavaScript by Code step by step"

console.log(findVowels(string));

function findVowels(str){
    let vowels="aeiouAEIOU";
    let count=0;
    for(let i=0;i<str.length;i++){
       if(vowels.includes(str[i])){
        count++
       }
        
    }
    return count;
}
