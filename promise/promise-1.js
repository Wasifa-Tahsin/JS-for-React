// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(Error=>console.log(Error))


// promise=>resole/reject
const promise1=new Promise((resolve, reject) => {
    console.log("promise is made")
  setTimeout(() => {
    const error=true
    if(!error){
        resolve(" promise is resolve ")
    }
    else{
        reject("Oppss.. Error happend..")
    }
  }, 3000);
})


const getPromise=async()=>{
    try{
        const res= await promise1
    console.log(res)
    }
    catch(error) {
        console.log(error);
    } 
    finally{
        console.log("finally block run");
    }
    
}
getPromise()
// promise1
// .then(res=>{
//     console.log(res)
    
// })

// .catch(error=>{
//     console.log(error)
   
// })

// .finally(()=>{
//     console.log("finally block")
// })
