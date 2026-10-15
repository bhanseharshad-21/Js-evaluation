function appointment(doctorAvailability,appointmentLimitExceeded){
    try {
        

        if(!doctorAvailability){
            throw new Error("Doctor not availble");
        }

        
        if (appointmentLimitExceeded) {
            throw new Error("Appointment Limit Exceeded.");
        }
        else{
            console.log("Appointment booked successfully.");
            
        }
    } catch (error) {
        console.log("Error: " , error);
        
    } finally{
        console.log("Appointment log updated");
        
    }
}

appointment(true,false);
