// let str = "code    Step by step anil.  .    sidhu.      ";
// let count=0;
// let isWord=false;
// for(let i=0;i<str.length;i++){
//     if(str[i]!==" " && !isWord){
//         count++
//         isWord=true
//     }else if(str[i]==" "){
//         isWord=false
//     }
// }
// console.log(count);

// // let words = "jddjjd sjeje ";
// // let wordscount = 0;
// // let spacecount = 0;
// // console.log(words);
// // for(let i = 0; i < words.length;i++)
// // {
// //   if(words[i] == " ")
// //   { 
// //     spacecount++;
// //     continue;
// //   }
// //   wordscount++ 
// // }
// // console.log("total words:" + wordscount);
// // console.log("total space:" + spacecount);

// // const str = 'code   step by step .      ';
// // let words = 0;

// // for (let i=0; i<str.length; i++) {
// //     if (str[i] == ' ' && str[i-1] !== ' ') {
// //         words++;
// //     }
// // } 

// // console.log(++words);


let str="  sidhu   is  greate  person    man.  ";
function countWord(str){
    let count=0;
    let maxword=0;
    for(let i=0;i<str.length;i++){
        if(str[i] != ' '){
            count=0;
            continue;
        }else{
            ++count;
            if(count==1){
                maxword+=1;
            }
        }
    }
    if(count==0){
        maxword+=1;
    }
    return maxword;
}

console.log(countWord(str))