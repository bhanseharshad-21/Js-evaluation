let Patient = [
    {
        name:"Yash",
        condition:"critical",
        bill:21000
    },
    {
        name:"Gaurav",
        condition:"normal",
        bill:25000
    },
    {
        name:"Sujal",
        condition:"critical",
        bill:36000
    },
    {
        name:"Susmit",
        condition:"normal",
        bill:12400
    },
    {
        name:"Aaman",
        condition:"critical",
        bill:45000
    },
]

function highestBill(arr){
    let maxBill = arr[0].bill;
    for(let i =0;i<arr.length;i++){
        if(arr[i].bill>maxBill){
            maxBill = arr[i].bill;
        }
    }

    console.log("Highest bill amount : ", maxBill);
    
}

highestBill(Patient);