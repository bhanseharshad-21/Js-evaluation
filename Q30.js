function totalMedicineExpenses(...billAmount){
    for (bill of billAmount){
        let sum = 0;
        sum+= bill;
        console.log(sum);
    }

    
    
}

let billAmount = [1500,2000,3200,1200];
totalMedicineExpenses(...billAmount);