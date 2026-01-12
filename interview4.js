
let data ={
    name:"anil",
    age:30,
    email:"anil@test.com"
}
// let keys=Object.keys(data);
let keys=[];
for(k in data){
    keys[keys.length]=k
  
}
console.log(keys);



