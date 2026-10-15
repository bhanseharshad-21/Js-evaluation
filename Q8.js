class Receptionist{
    constructor(eid,name,dept,experience) {
        this.eid = eid ;
        this.name = name;
        this.dept = dept;
        this.experience = experience;
    }

    displayInfo(){
        console.log("Employee id: ", this.eid);
        console.log("Employee name: ", this.name);
        console.log("Department: ", this.dept);
        console.log("Employee experience: ", this.experience);
        
    }
}

let e1 = new Receptionist(10,"Harshad","It",4);
e1.displayInfo();
