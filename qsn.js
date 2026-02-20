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