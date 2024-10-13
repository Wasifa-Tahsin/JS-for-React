
// const fun1=(x,y,callback)=>{
//     console.log("hii")
//     callback(x,y)
// }

// const fun2=(x,y)=>{
//     console.log(x+y) 
// }
// fun1(3,6,fun2)


const giveName=(name,callback)=>{
    console.log("hi")
    setTimeout(() => {
        callback(name)
    }, 3000);
}


const greeting=(name)=>{
    console.log(`Hello,${name}`)
}
giveName("Afia",greeting)
