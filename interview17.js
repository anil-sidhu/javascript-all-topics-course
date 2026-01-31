let str="anil sidhu";
console.log(checkLength(str));

function checkLength(val){
    let count=0;
    // for(let x of val){
    //     count++
    // }
    while(val[count]!==undefined){
        count++
    }
    return count;
}