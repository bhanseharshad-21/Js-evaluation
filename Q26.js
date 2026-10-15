// 1.Array destructuring

let patientNames = ["Yash","Sujal","Gaurav","Susmit"];

let [p1,p2,p3,p4] = patientNames;

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);


// 2.Object destructuring

let Doctor = [
    {
        name:"Jatin",
        department:"Cardiology"
    }
];

let {name,department} = Doctor;

console.log(name);
console.log(department);

