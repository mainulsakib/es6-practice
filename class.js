class student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school="Chittagong Govt. High School"
    }
}
const student1=new student(1,"sakura");
const student2=new student(16,"Jahid");
console.log(student2.school,student1.school)
