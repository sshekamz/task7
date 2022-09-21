
const posts=[
    {title:'post 1',body:'this is post one'},
    {title:'post 2',body:'this is post two'}
]

async function allKindOfPost() {


    const createPost=new Promise((resolve,reject)=>{
        const error=false;
        setTimeout(() => {
            
        if(!error){
            
            resolve(posts.push({title:'post 3',body:'this is post three'}))
        }else{
            reject('Create Post not working');
        }
            
        }, 1000);
    
        
    })
    
    const getPost= new Promise((resolve,reject)=>{
        let output='';
            for(var i=0;i<posts.length;i++){
                output+=`<li>${posts[i].title} </li>`
            }
            document.body.innerHTML=output;
            
        resolve(output)
    })
        
    
    const deletePost= new Promise((resolve,reject)=>{
        
        setTimeout(()=>{

            if(posts.length>0){
                resolve(posts.pop())
            } else{
                reject('Post is Empty');
            }

        },2000)
    
    })

    
    let [create,get,deletep]= await Promise.all([createPost,getPost,deletePost])

        return ([create,get,deletep]);

}
allKindOfPost()