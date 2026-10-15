let patientBills = [110000,201000,32001,54200];

// 1.Map()

function addServiceCharge(arr,amount){
    let newBillAmount = arr.map((arr,amount)=>{
        return arr+amount;
    })

    console.log(newBillAmount);
    
}

addServiceCharge(patientBills,500);

// 2.Filter
function filterPatient(arr,amount){
    let billExceeded = arr.filter((arr,amount)=>{
        return arr>=amount;
    })

    console.log(billExceeded);
    
}

// 3.Reduce

function totalRevenue(arr){
    let total = arr.reduce((sum,arr)=>{
        return sum += arr;
    },0)

    console.log("Total revenue: ",total);
    
}
totalRevenue(patientBills);