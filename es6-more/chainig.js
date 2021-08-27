class support{

    name;
    designation='learning web development';
    address='Dhaka';
    constructor (name,address){
        this.name=name;
        this.address=address;
    }
    startSession(){
        console.log(this.name,'hello i am rohul amin i am learning web development');
    }
}
const khan=new support('Rohul khan','Doher');
khan.startSession()
// console.log(khan)