class Student {
    
    constructor(name, age, phoneNumber, marks){
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.marks = marks;
        this.count();
    }
    isEligible(marks){
        if(this.marks>40){
            console.log('eligible');
        }else{
            console.log('not eligible');
        }
    }
    eligible(marks){
        let minMarks = 40;
        let ifEligible = (age) => {
            if(this.marks>minMarks && this.age>18){
                return "true";
            }else {
                return "false";
            }
        }
        console.log(ifEligible());
    }
    static count=0;
    count(){
        Student.count++;
        return Student.count;
    }
}
const sam = new Student('sam',19,4567,50);
const ram = new Student('ram',20,4568,80);
const shyam = new Student('shyam',22,4569,90);
const alex = new Student('alex',20,4570,30);
const harry = new Student('harry',21,4571,20);
sam.isEligible();
ram.isEligible();
shyam.isEligible();
alex.isEligible();
harry.isEligible();
console.log(Student.count);
console.log(sam.eligible());
console.log(ram.eligible());
console.log(shyam.eligible());
console.log(alex.eligible());
console.log(harry.eligible());