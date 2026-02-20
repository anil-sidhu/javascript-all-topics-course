let data = [1, 2,3, 5];
n= data.length+1
let expectedSum= n*(n+1)/2;
let actualSum=0;
for(let i=0;i<data.length;i++){
    actualSum+=data[i]
}
console.log(expectedSum-actualSum);

