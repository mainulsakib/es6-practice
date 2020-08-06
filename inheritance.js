class Parent{
    constructor(name){
        this.fatherName="Schwerznegger";
    }
}
class child extends Parent{
    constructor(name){
        super();
        this.name=name

    }
    fullName(){
        return this.name+" "+this.fatherName;
    }
}
const babu=new child("Arnold")
const babu2=new child("Tom")
console.log(babu.fullName(),babu2.fullName())