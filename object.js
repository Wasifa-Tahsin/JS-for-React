const obj={
    name:"Hello",
    age:21,
    address:"rajshahi",
    nest:{
        city:"world"
    }
}

const {age,nest,...remaining}=obj
console.log(nest.city,remaining)
// console.log(age,remaining)

// const obj2={...obj};
// obj2.phone=3455
// // console.log(obj2)

// const {address:myAddress}=obj
// console.log(myAddress)