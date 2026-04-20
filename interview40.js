console.log("A");

queueMicrotask(() => console.log("B"));   //high

Promise.resolve().then(() => console.log("C"));  //high

setTimeout(() => console.log("D"), 0);   //low

console.log("E");


