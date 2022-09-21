console.log('person1: Shows ticket');
console.log('person2: Shows ticket');

const promiseWifeBringTickets= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');

    },3000);
})

const getPopcorn=promiseWifeBringTickets.then((t)=>{
    console.log('wife: I have ticket');
    console.log('husband: We should go in');
    console.log('Wife: No I am hungry');
    return new Promise((resolve,reject)=>{
        resolve(`${t} Pop Corn`)
    })
    
});
const getButter=getPopcorn.then((t)=>{
    console.log('Husband: I have popcorn');
    console.log('husband: we should go in');
    console.log('Wife: i need butter');
    return new Promise((resolve,reject)=>{
    resolve(`${t}  butter`)
})
})
getButter.then((t)=>console.log(t))


console.log('person4: Shows ticket')
console.log('person5: Shows ticket')
