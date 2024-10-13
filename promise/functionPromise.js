const getPromise=(name)=>{
 return new Promise((resolve, reject) => {
    console.log(`hello ${name}.your promise is made`)
  setTimeout(() => {
    const error=false
    if(!error){
        resolve(`${name} your promised is resolved`)
    }
    else{
        reject(`Oppss..${name} Error happend..`)
    }
  }, 3000);
})   
}

getPromise("Afia")
.then(res=>console.log(res))
.catch(err=>console.log(err))