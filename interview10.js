let word = "HellooHi"
let newStr=removeDuplicate(word);
console.log(newStr);

function removeDuplicate(str){
    let seen={}
    let result ="";
for(char of str){
    if(!seen[char]){
        result+=char
        seen[char]=true
    }
    
}
return result;

}
