JS 
Write function for- 
Flatten Array -> [[1,2],3,4], [[[1,2],3],4],[[1,2,3,4]], [[1,2],[3,4]] -> returns [1,2,3,4] 
Deep Clone 
Function Curring -> sum(1)(2)(3), sum(1,2)(3), sum(1,2,3) -> returns 6 
Write a function which will return a randomly 40% flase and 60% true approximately. 
 
Give output for below code – 
Comparison 
let x = [1, 2, 3]; 
let y = [1, 2, 3]; 
let z = y; 
console.log(x == y); 
console.log(x === y); 
console.log(z == y); 
console.log(z == x); 
 
false 
false 
true 
false 
 
2. 	const arr=[1,2,3,4,5] 
arr[3]=9 
 
  
Scope 
(function(){ 
  var a = b = 3; 
})(); 
console.log("a defined? " + (typeof a !== 'undefined')); 
console.log("b defined? " + (typeof b !== 'undefined')); 
 
 
let a = {}; 
let b = { key: "b" }; 
let c = { key: "c" }; 
a[b] = 123; 
a[c] = 456; 
console.log(a[b]); 
 
const data = [ 
{ 
"Name": "name", 
"Address": { 
"addressLine": "address", 
"pinCode": 1233 
} 
} 
] 
const [{ Address: { addressLine, pinCode } }] = data; 
 
 
Hoisting with scope 
var num = 10; 
(()=>{ 
console.log(num) 
var num = 20; 
console.log(num) 
})() 
------------------------------ 
console.log(a()) 
const a = function (params) { 
    return 'asdas' 
} 
Variable hoisting - 
function fff1() { 
  function b() { 
    return 3; 
  } 
  console.log(b()); 
  function b() { 
    return 8; 
  } 
} 
fff1(); 
counter question 
function fff() { 
  var b = function () { 
    return 3; 
  }; 
  console.log(b()); 
  var b = function () { 
    return 8; 
  }; 
} 
fff(); 
 
Context- 
console.log( this) 
let obj = { 
name: "Name", 
thisObj: this, 
someFunction:function(){ 
      return this; 
}, 
someArrowFunction: () => { 
      return this; 
} 
} 
console.log(obj.thisObj) 
console.log(obj.someFunction()) 
console.log(obj.someArrowFunction()) 
Output – 
{ 'global level': {} } 
{} 
{ 
  name: 'Name', 
  thisObj: {}, 
  someFunction: [Function: someFunction], 
  someArrowFunction: [Function: someArrowFunction] 
} 
{} 
 
Event loop- 
console.log("one")  
setTimeout(()=>{console.log("after 1 sec")},1000)  
setTimeout(()=>{console.log("after 0 sec")},0)  
const promise = new Promise(resolve=>{ 
console.log("three");  
resolve("four") 
} 
)  
promise.then(data=>console.log(data))  
console.log("two")  
setTimeout(()=>{console.log("after 000 sec")},0)  
setTimeout(()=>{console.log("after 00 sec")}) 
 
 
one 
three 
two 
four 
after 0 sec 
after 00 sec 
after 1 sec 
 
Closure 
function createTimers() { 
    for (var i = 1; i <= 5; i++) { 
        setTimeout(function() { 
            console.log(i); 
        }, 1000); 
    } 
} 
---------------------------- 
let i; 
for(i=0;i<3;i++){ 
    const print=()=>{ 
        console.log(i) 
    } 
    setTimeout(()=>{print()},0) 
} 
 
REACT 
Give output for below code 
 
import { useState, useEffect } from "react"; 
export default function CounterComponent() { 
  const [count1, setCount1] = useState(0); 
  const [count2, setCount2] = useState(0); 
  const [count3, setCount3] = useState(0); 
  const [count4, setCount4] = useState(0); 
 
  useEffect(() => { 
    setCount4 ((prev) => prev + 1); 
  }, [count1, count2, count3]); 
 
  const handleClick = () => { 
    setCount1 (count1+ 1); 
    setCount1 (count1+ 1); 
    setCount1 (count1+ 1); 
    setCount1((prev) => prev + 1); 
 
    setCount2 (count2+ 1); 
    setCount2 (count2+ 1); 
    setCount2 (count2+ 1); 
    setCount2((prev) => prev + 1); 
 
    setCount3((prev) => prev + 1); 
  }; 
 
  return ( 
    <div > 
      <h2>Counters</h2> 
      <p>Count 1: {count1}</p> // 
      <p>Count 2: {count2}</p> // 
      <p>Count 3: {count3}</p> // 
      <p>Count 4: {count4}</p> // 
      <button onClick={handleClick}> 
        Update Counts 
      </button> 
    </div> 
  ); 
} 
 
Assume there is no error in code give output of the react code, which hook will execute when and why ? 
import { useState, useEffect, useCallback, useMemo } from "react"; 
export default function ExampleComponent() { 
  const [count, setCount] = useState(0); 
 
  useEffect(() => { 
    console.log("Count updated:"); 
  }, []); 
 
  const increment = useCallback(() => { 
    console.log("useCallback:"); 
  }, []); 
 
  const squaredCount = useMemo(() => { 
    console.log("Calculating squared count"); 
   }, []); 
 
  return ( 
    <div > 
      {console.log("Rendering JSX")} {/* Console.log inside JSX */} 
    </div> 
  ); 
} 
Output- 
Calculating squared count 
Rendering JSX 
Count updated: 
 
Write a counter component which will have a input with type number, a button and a span to display counter. Counter state will have 0 as default value and it will increment after 30 sec, if user add any value in input the counter will start counting from entered number in input, add a cosole.log in component to check rerendering and ask to optimize it. Evaluate how the component rerendering is handled. 
 
Scenario based 
𝗛𝗼𝘄 𝘄𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝗶𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 𝗮 𝘀𝗲𝗮𝗿𝗰𝗵 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝗮𝗹𝗶𝘁𝘆 𝘄𝗶𝘁𝗵 𝗹𝗶𝘃𝗲 𝗳𝗶𝗹𝘁𝗲𝗿𝗶𝗻𝗴 𝗶𝗻 𝗮 𝗥𝗲𝗮𝗰𝘁 𝗮𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ? -> evaluate if candidate mentions about debouncing, url state management. 
𝗛𝗼𝘄 𝘄𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝗶𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 𝗮 𝗰𝘂𝘀𝘁𝗼𝗺 𝘂𝘀𝗲𝗙𝗲𝘁𝗰𝗵 𝗵𝗼𝗼𝗸 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁 𝗳𝗼𝗿 𝗵𝗮𝗻𝗱𝗹𝗶𝗻𝗴 𝗛𝗧𝗧𝗣 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀? -> evaluate if candidate mentions loading and error state and flexibility for adding headers into xhr call. 
𝗛𝗼𝘄 𝘄𝗼𝘂𝗹𝗱 𝘆𝗼𝘂 𝗶𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 𝗮 𝗱𝗿𝗮𝗴𝗴𝗮𝗯𝗹𝗲 𝗹𝗶𝘀𝘁 𝗶𝗻 𝗥𝗲𝗮𝗰𝘁? Using state management. 
 
 
 
Micro Frontend Scenario 
𝗤: 
How would you design a Micro Frontend architecture in React? 
Evaluate if candidate mentions: 
Module Federation 
Independent deployments 
Shared dependencies 
Version conflicts 
Communication between MFEs 
CI/CD considerations




reconciliation 
how many vartual dom
call, apply , bind ,
virtualization 



function createTimers() { 
    for (var i = 1; i <= 5; i++) {
        console.log(i);
         
        // setTimeout(function() { 
        //     console.log(i); 
        // }, 1000); 
    } 
} 


