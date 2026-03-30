
let user={
    name:'anil',
    greet:function(){
        console.log(this.name);
        
    }
}
let greetAdmin = user.greet.bind(user);
greetAdmin()