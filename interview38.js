const obj = {
  name: "Sidhu",
  getName: function() {
    
    function inner() {
        const name ="peter"
      return this.name;
    }
    return inner();
  }
};

console.log(obj.getName());