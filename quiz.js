const workers= [
    {name:"nijhum jawad", hourlyRate:20.65 ,hoursWorked:61},
    {name:"zakia afrin jeme", hourlyRate:30.56, hoursWorked:62},
    {name:"anu mirza", hourlyRate:40.90, hoursWorked:66}

]

class Payroll{
    constructor(workers){
this.workers = workers;
this.Name = this.getNames();
 this.fulltime = this.getFullTime();
this.totallabor = this.getTotalLabor();
    }
getNames(){
    const newarray = this.workers.map(worker =>{
        return worker.name;

    })
return newarray.sort();
     
}
getFullTime(){
    return this.workers.filter(worker =>{
        return (worker.hoursWorked > 60)? true:false;
    })
} 
getTotalLabor(){
    return this.workers.reduce((acc,curr) =>{
       
        return acc + (curr.hourlyRate * curr.hoursWorked);
        
    },0)
}

}
const payroll = new Payroll(workers);
console.log(payroll.Name);
console.log(payroll.fulltime);
console.log(payroll.totallabor);
