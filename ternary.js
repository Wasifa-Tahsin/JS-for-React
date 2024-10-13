const person={
    name:"Afia",
    gender:"female",
    isStudent:true
}

// let sentense="";
// if(person.isStudent){
//     sentense="She is a student"
// }
// else{
//     sentense="She is a student"
// }


// let sentense="";
// person.isStudent?sentense="She is a student": sentense="She is a student"

let sentense=person.isStudent?"She is a student": "She is a student"
console.log(sentense)