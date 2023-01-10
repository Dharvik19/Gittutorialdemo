const posts = [
        {title: 'post one', body:'This is post one' ,createdAt: new Date().getTime()},
        {title: 'post two', body:'this is post two',createdAt: new Date().getTime()}
    ];
    let intervalId = 0;
    function getPosts() {
        clearInterval(intervalId);
        intervalId= setInterval(()=>{
            let output = '';
            for(let i = 0;i<posts.length;i++){
                output+=`<li> ${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt)/1000} seconds ago`
            }
            document.body.innerHTML = output;
        },1000);
    }
    function createPost(post){
        return new Promise((resolve,reject)=>{
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
    function create4thPost(post){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                posts.push({...post,createdAt:new Date().getTime()});
                const error = false;
                if(!error){
                    resolve();
                }else{
                    reject('Error:something went wrong');
                }
            },3000);
        });
    }
    getPosts();
    function deletPost() {

        return new Promise ((resolve,reject)=>{
            setTimeout(()=>{
               if(posts.length>0){
                const lastElement = posts.pop();
                resolve(lastElement);
               }else{
                reject('Array is empty');
               }
            },2000);
        })
    }
createPost({title:'post three',body:'This is post three'})
.then(()=>{
    getPosts()
    deletPost().then(()=>{
        getPosts();
        deletPost().then(()=>{
            getPosts();
            deletPost().then(()=>{
                getPosts()
                deletPost().then(()=>{})
                .catch((err)=>{
                  
                    console.log("inside the catch block",err);
                   
                })
            })
        })
    })
})  
.catch(err=>console.log(err));

const Promise1 = Promise.resolve('hello world');
const Promise2 = 10;
const Promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'GoodBye')
});
   
Promise.all([Promise1,Promise2,Promise3]).then(values => console.log(values));

const user ={
    userName:'yash',
    lastActivity : new Date().getTime()
}



  function updateUserActivity(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            
            console.log(user.lastActivity = new Date().getTime());
            resolve(user.lastActivity);
         
            
        },2000);
    })
       
    
  }
  updateUserActivity();
// var promiseuser = Promise.resolve(updateUserActivity);

// var promisepost = Promise.resolve(createPost);
// // console.log(promisepost);
// // console.log(promiseuser);
// // console.log(promisepost);
// // Promise.all([promiseuser,promisepost]).then(values => console.log(values));
// function updateUserActivityTimeAndPost(){
//     Promise.all([createPost,updateUserActivity])
//     .then(([promiseuser,promisepost])=>{
//         console.log(updateUserActivity());
//         console.log(createPost());
//     }).catch(err=>console.log(err));
// } 
// updateUserActivityTimeAndPost();

// Promise.all([promiseuser,promisepost]).then(values => console.log(values));
createPost({title:'post 5',body:'this is post 5'})
.then(console.log(`before post 5 created user last activity time ${user.lastActivity}`));

Promise.all([createPost({title:'post 6',body:'this is post 6'}),updateUserActivity()]).then((res)=>console.log(`after post 5 created ${res}`));


async function init(){
    await createPost({title:'Post 7 ', body:'body of 7'});

    getPosts();
}
 
const preMovie = async() =>{
    const wife = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000)
    })
}

const getpopcorn = new Promise((resolve,reject)=>resolve ('popcporn'));
const getButter = new Promise((resolve,reject)=>resolve('butter'));
let ticket = await wife;

console.log(`wife: i have the${ticket}`);

let butter  = await getButter;

console.log(`i got the ${butter}`);
