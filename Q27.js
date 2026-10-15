function bookAppointment(drAvailability){
    return new Promise((resolve,reject)=>{
        
        if(drAvailability){
            resolve("Appointment Booked");
        }else{
            reject("Doctor not available");
        }
    })
}

bookAppointment(false)
.then((result)=>{
    console.log(result);
    
}).catch((error)=>{
    console.log("Error: ",error);
    
})