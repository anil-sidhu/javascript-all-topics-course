
let data =[2,6,9,1,10,30];
function reverseData(){
    let temp=[]
for(let i=data.length-1;i>=0;i--){
    temp.push(data[i])
}
return temp;
}
let newData =reverseData(data);
console.log(newData);


