const promise1=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("result of promise 1")
    }, 1000);
})


const promise2=new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve("result of promise 2")
    //    reject("result not show")
    }, 2000);
})


const promise3=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("result of promise 3")
    }, 3000);
})


console.log("calling 3 async tasks")
// promise1
// .then(responsive=>{
// console.log(responsive)
// promise2
// .then(responsive=>{
// console.log(responsive)
// promise3
// .then(responsive=>{
// console.log(responsive)
//     })
// })
// })



// Promise.all([promise1,promise2,promise3])
// .then(values=>{
//     console.log(values)
// })
// .catch(err=>console.log(err))


const getAllPromises=async()=>{
    const [results1,result2,result3]=await Promise.all([promise1,promise2,promise3])
    console.log(results1,result2,result3)
}

getAllPromises()