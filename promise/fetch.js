fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response=>response.json())
.then(data=>console.log(data))
.catch(Error=>console.log(Error))

const showData=async()=>{
    const result=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data=await result.json()
    console.log(data)
}
showData()