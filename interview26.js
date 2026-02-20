function checkOutout() {
    var a = b = 3;
    console.log(typeof a); //number
    console.log(typeof b); //number
}
checkOutout();

console.log(typeof a); //undefined
console.log(typeof b);  //number