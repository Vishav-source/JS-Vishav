// function myfunction(){
//     console.log("Hello, basic function!")
// }
// myfunction()


//**************Passing argument to a function******************/
function addTwo(number1, number2){
    return number1+number2
}
// console.log(addTwo(3,7))

//*****************Default parameter in function****************/
function LoggedIn(username="vishav"){
    console.log(`${username} is logged In`)
}

// LoggedIn("Palak")
// LoggedIn()


//************************REST OPERATOR, HANDLING SHOPPING PROBLEM**************************/
function shopping_cart(...num){
    return num

}
// console.log(shopping_cart(400,700,69999))

//*************Passing object as argument to function**************************/
const user={
    name:"vishav",
    age:17
}

function handlingObject(myuser){
    console.log(`${myuser.name}'s age is ${myuser.age}`)
}
// handlingObject(user)
// Direct passinng:
// handlingObject({name:"vishav",age:45})


//********************Passing array into function */

const arr=[2,3,4,67]

function handlingArrays(myarr){
    console.log(myarr[2])
}
// handlingArrays(arr)
//Direct passing:
handlingArrays([2,3,5,7])