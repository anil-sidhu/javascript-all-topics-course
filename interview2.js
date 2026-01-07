let arr = [1, 2, 3, 2, 4, 1, 5, 1, 4];
let count={}
for(let i=0;i<arr.length;i++){
    if(!count[arr[i]]){
count[arr[i]]=0
    }
   
   count[arr[i]]= count[arr[i]]+1
}
console.log(count);


