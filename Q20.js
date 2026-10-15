function checkFees(consultationFees=0,medicalCost=0){
    try{
        if(consultationFees>=2000){
            throw new Error("Consultation fees are due");
        }else if(medicalCost>=200000){
            throw new Error("Medical fees are due");
        }
    }catch(error){
        console.log("Error: " , error);
        
    }
}

checkFees(0,15000000);