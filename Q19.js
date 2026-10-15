class InvalidPatientException extends Error{
    constructor(message){
        super(message);

        this.message = "Invalid patient ID";
    }
}

function searchPatient(id){
    try {
        if(id<=0){
            throw new InvalidPatientException();
        }
        else{
            console.log("Searching");
            
        }
    } catch (error) {
        console.log("Error: ", error.message);
        
    }
}

searchPatient(-1);