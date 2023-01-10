//this inside global scope 
this.table = 'window table';

//call function rescue 
// cleanTable.call(this,'some soap');
// console.log(window.table);
this.garage = {
    table: 'garage table',
    // cleanTable(){
    //     console.log(`cleaning ${this.table}`);
    // }
};
// let johnsRoom = {
//     table : "john's table",
//      cleanTable(){
//          console.log(`cleaning ${this.table}`);
//      }
// };

let createRoom = function (name){
    this.table = `${name} table`
}
//this inside a function 
//createRoom.prototype.cleanTable=function(soap){
    // let that = this;
    // const innerFunction = (_soap)=>{
    //     console.log(`cleaning ${that.table} using ${_soap}`);
    //      console.log(`cleaning ${this.table} using ${_soap}`);
    // }
    //innerFunction(soap);
    // innerFunction.call(this,soap); method two using call
    // innerFunction.bind(this)(soap); method three using bind
//}

createRoom.prototype.cleanTable = function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
}
const jillsRoom = new createRoom('jill');
const johnsRoom = new createRoom('john');
jillsRoom.cleanTable('jills soap');
johnsRoom.cleanTable('johns soap');
// johnsRoom.cleanTable();
// this.garage.cleanTable();
//console.log(this.johnsRoom.table)//cannot do this 

// cleanTable.call(this.garage,'garage soap');
// cleanTable.call(johnsRoom,"john's soap");


// using a class
//class createRoom{
//     constructor(name){
//         this.table = `${name}'s table`
//     }
//     cleanTable(soap){
//         console.log(`cleaning ${this.table} using ${soap}`);
//     }
// }