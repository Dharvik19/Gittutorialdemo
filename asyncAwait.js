console.log('Aync Await');
console.log('person 1: shows ticket');
console.log('person 2: shows ticket');
const posts = [
    {title: 'post one', body:'This is post one' ,createdAt: new Date().getTime()},
    {title: 'post two', body:'this is post two',createdAt: new Date().getTime()}
];

// const promiseWifrBringsTicket = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// });

// promiseWifrBringsTicket.then((t)=>{
//     console.log(`person 3: shows ${t}`);
// });

// const getPopcorn= promiseWifrBringsTicket.then((t)=>{
//     console.log('wife:i have the tickets');
//     console.log('husband : we should go in ');
//     console.log('wife : wife no i am hungry');
//     return new Promise ((resolve,reject)=>{
//         resolve(`${t} popcorn`)
//     });

// })

// const getButter = getPopcorn.then((t)=>{
    // console.log('husband : I have popcorns ');
    // console.log('husband : we should go in ');
    // console.log('wife : need butter on my popcorn');
//     return new Promise ((resolve,reject)=>{
//         resolve(`${t} butter`)
//     });

// } );


// getButter.then((t)=>{
//     console.log(t);
// })

const preMovie = async() => {
    const promiseWifrBringsTicket = new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve('ticket');
            },3000);
        });

        const getPopcorn = new Promise((resolve,reject)=>resolve('popcorn'));
        const addButter = new Promise((resolve,reject)=>resolve('butter'));
        const getColdDrinks = new Promise((resolve,reject)=>resolve('coldDrinks'));
        let ticket = await promiseWifrBringsTicket;

        // console.log(`wife:i have the ${ticket}`);
        // console.log('husband : we should go in ');
        // console.log('wife : wife no i am hungry');

        // let popcorn = await getPopcorn;

        // console.log(`husband : I have ${popcorn} `);
        // console.log('husband : we should go in ');
        // console.log('wife : need butter on my popcorn');

        // let butter = await addButter;

        // console.log(`husband: i have added ${butter} on popcorn`);
        // console.log(`anything else?`);
        // console.log(`wife: let us go we are getting late`); 
        // console.log(` husband: thankyou for the reminder`);

        // let coldDrinks = await getColdDrinks;

        // console.log(`husband: i have got the ${coldDrinks} too`);
        
        let [popcorn,butter,coldDrinks] = await Promise.all([getPopcorn,addButter,getColdDrinks])
        console.log(`${popcorn},${butter},${coldDrinks}`);
        return ticket;
};
preMovie().then((m)=> console.log(`person3: shows ${m}`));

const  createPost = async(post) =>{
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()});
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error:something went wrong');
            }
        },2000);
    });
}

const deletPost = async() => {

    await new Promise ((resolve,reject)=>{
        setTimeout(()=>{
           if(posts.length>0){
            const lastElement = posts.pop();
            resolve(lastElement);
           }else{
            reject('Array is empty');
           }
        },1000);
    })
}

console.log('person 4: shows ticket');
console.log('person 5: shows ticket');
createPost();
deletPost();