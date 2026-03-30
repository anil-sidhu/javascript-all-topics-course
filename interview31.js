let input1= ["name","age","email"];
let input2=["anil",29,"anil@sidhu.con"];
function makeObject(arr1,arr2){
let obj={};
for(let i=0;i<arr1.length;i++){
    obj[arr1[i]]=arr2[i]
}
console.log(obj);

}
makeObject(input1,input2)