// var student = {
//     age : 20
    
// };
// // var addToThis = function(a) {
// //     return this.age + a;
// // }; 
// // console.log(addToThis.call(student,3));
// var addToThis = function(a,b,c) {
//     return this.age + a+b+c;
// }; 
// var arr = [1,2,3];
// // console.log(addToThis.apply(student,arr));
// var bound = addToThis.bind(student);
// console.log(bound(1,2,3));

// object definition
const student1 = {
    age: 20,
    
    introduction: function (a) {
      console.log(this.age+a);
    },
  };
  
  // object definition
  const student2 = {
    age: 20
    
  };
  
  // the object student2 is borrowing introduction method from student1
  let result= student1.introduction.bind(student2,10);
  
  // invoking result() function
  result();  //30