// forEach react e use korbo
// map,find,filter,reduce use korbo

// const numbers=[4,45,65,767]

// for(let i=0; i<numbers.length;i++){
//     console.log(i)
// }




// numbers.forEach((item)=>console.log(item))

// const result=numbers.forEach((item)=>console.log(item))
// console.log(result)

// map
// const result=numbers.map((item,index)=>{
//     console.log('item:',item,'index:',index)
//     return item*2
// })
// console.log(result)


// const numbers=[10,1,5,2,767]

// const sentence=`my numbers are ${numbers.map(item=>item).join(" ")}`
// console.log(sentence)

// find
// const result=numbers.find((item)=>item<10)
// console.log(result)


// filter
// const result=numbers.filter((item)=>item<10)
// console.log(result)



const numbers=[1,2,3,4,5]
// let sum=0
// numbers.forEach((item)=>sum+item)
// console.log(sum)


// reduce
const total=numbers.reduce((previous,current)=>previous+current,0)
console.log(total)


const product=[
    {price:1},
    {price:1},
    {price:1},
    {price:1},
    {price:1}
]

const totals=product.reduce((previous,current)=>previous+current.price,0)
console.log(totals)