const user ={
    username:"vishav",
    age:14,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to the site`)
        console.log(this)
    }
}
// user.wecomeMessage("vishav")
user.username="ram"
// console.log(user.welcomeMessage())
// console.log(this)



// function loginMessage(){
username="vishav"
//     console.log("Hi, how r you sir?")
    // console.log(this)
    // console.log(this.username)
// }
// loginMessage()

// const myfunction=function(){
//     let username="baigra"
//     console.log(this.username)
// }
// myfunction()

//*********************Arrow functions ***************/
const myfunction=() =>{
    let username="baigra"
    console.log(this)
}
// myfunction()

// const coffee = (num1, num2)=>{
//      return num1+num2
// }
// console.log(coffee(2,4)) 

const coffee = (num1, num2)=>(num1+num2) // we call it implicit arrow function and no need of return, but we can use brackets;

// console.log(coffee(2,4))

// to return an object using array function

const sugar=(usernmae)=>({name:username})
 console.log(sugar("vishav"))
 
