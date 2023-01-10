// const asyncAwait = async() => {
//     const newPromise = new Promise((resolve,reject) =>{
//             setTimeout(()=>{
//                 resolve('ticket');
//             },3000);
//         });
//         let ticket = await newPromise;

//         console.log('a');
//         console.log('b');
//         console.log('c');
//         console.log('d');

        
//         return ticket;
// };
// asyncAwait().then();

var obj = {

    age: 25,

    findageArrowFn: () => {
         age = 15
     console.log(this.age)

    },

    findAgeNormalFn: function(){

     console.log(this.age)

    }

   }

   obj.findageArrowFn(this.age);

   obj.findAgeNormalFn();
