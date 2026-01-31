let data = [10, 40, 50, 20, 30,"apple","green"];
console.log(getSum(data));

function getSum(arr){
   let sum=0;
   for(let item of arr){
    if(typeof item =="number")
    sum+=item;
   }
   return sum;
}
