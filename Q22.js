let increaseFees = function(arr,percent){
    let increasedFees = arr.map((arr,percent)=>{
        let increaseFeesby = arr*percent/100;
        return arr +=increaseFeesby;
    })
    console.log(increasedFees);
    
}

let drFees = [3200,5000,1200,4800];

increaseFees(drFees,5);