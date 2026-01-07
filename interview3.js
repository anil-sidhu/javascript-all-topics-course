const company = {
    name: "Tech Corp",
    department: {
        name: "Engineering",
        employee: {
            empId: 101,
            role: "Frontend Developer",
            address:{
                city:'noida',
                country:'india'
            }
        }
    }
};
function extract(obj){
for(key in obj){
    if(typeof obj[key] =="object"){
        extract(obj[key])
    }else{
    console.log(key, ": ", obj[key]);

    }
    
}
}
extract(company)


