
let data = [10, 4, 25, 1, 99, 34];
let l = data[0];
let s = data[0];
for(let i=0;i<data.length-1;i++){
    if(data[i]>l){
        l=data[i];
    }
    if(data[i]<s){
        s=data[i];
    }
    
}
console.log(l,s);


