let numArray1= [3,6,8];
let numArray2= [4,7,8];

// let a=numArray1[0];
// let b=numArray1[1];
// let c=numArray1[2];
 [a,b,c]=numArray1;
 let combine =[...numArray1,...numArray2];
  combine =[...new Set([...numArray1,...numArray2])]
console.log(a,b,c);
console.log(combine);


