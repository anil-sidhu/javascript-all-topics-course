let info = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(convertInSmall(info));

function convertInSmall(str){
    let result =""
    for(let i=0;i<str.length;i++){
        let code =str.charCodeAt(i);
        if(code>=65 &&code <=90){
            result+=String.fromCharCode(code+32)
        }else{
            result+=str[i]
        }
        
    }
    return result;
}


