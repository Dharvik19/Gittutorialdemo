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

function createPost(post) {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error:something went wrong');
            }
        },1000);
    })
}
function deletPost() {
    
    setInterval(()=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
           
            posts.pop();

            const error = true;

            if(!error){
                resolve();
            }else{
                reject('Error:something went wrong');
            }
        },7000);
    })
},3000);
}
function create4Post(post) {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error:something went wrong');
            }
        },2000);
    })
}
  

createPost({title: 'post three', body:'this is post three',createdAt: new Date().getTime()}).then(getPosts).then(deletPost).catch(err=> console.log(err)
);
create4Post({title:'post four',body:'this is post four',createdAt: new Date().getTime()}).then(getPosts).catch(err=> console.log(err)
);
deletPost();
