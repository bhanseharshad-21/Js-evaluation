let Patient = [
    {
        name:"Yash",
        condition:"critical"
    },
    {
        name:"Gaurav",
        condition:"normal"
    },
    {
        name:"Sujal",
        condition:"critical"
    },
    {
        name:"Susmit",
        condition:"normal"
    },
    {
        name:"Aaman",
        condition:"critical"
    },
]


function filterCriticalPatients(arr){
    let criticalPatients = arr.filter((arr)=>{
        if(arr.condition =="critical"){
            return arr;
        }
    })

    console.log(criticalPatients);

}

filterCriticalPatients(Patient);