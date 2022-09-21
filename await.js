console.log('person1: Shows ticket');
console.log('person2: Shows ticket');

const preMovie = async() => {

    const promiseWifeBringTickets= new Promise((resolve,reject)=>{
             setTimeout(()=> resolve('ticket'),3000);
         });
         const getPopcorn=new Promise((resolve,reject)=>resolve('Pop Corn'));
         const getButter=new Promise((resolve,reject)=>resolve('Butter'));
         const getColdDrinks=new Promise((resolve,reject)=> resolve('Cold Drink'))
        
         let ticket= await promiseWifeBringTickets;
        console.log(`wife: I have ${ticket}`);
        console.log('husband: We should go in');
        console.log('Wife: No I am hungry');
         let popcorn= await getPopcorn;
         console.log(`Husband: I have ${popcorn}`);
         console.log('husband: we should go in');
         console.log('Wife: i need butter');
         let butter=await getButter;
         console.log(`Husband: I have ${butter}`);
         console.log('Husband: Anything Else');
         console.log('Wife: I need Cold drink');
         let coldDrink=await getColdDrinks;
         console.log(`Husband: I have ${coldDrink}`);
         console.log('Husband: Anything Else');
         console.log('Wife: Lets go we are getting late');


         return ticket;
        }

    preMovie().then((m)=>console.log(`person 3 shows:${m}`));
    console.log('person4: Shows ticket')
    console.log('person5: Shows ticket')