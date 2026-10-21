//Arrays, strings, and functions etc. all have "Object" as prototype

function createUser(username, score){
    this.username=username
    this.score=score

}
createUser.prototype.increment=function(){// this prototype will work for function only
    this.score++;
}

const chai=new createUser("vishav",12)
const code=new createUser("baigra",444)
chai.increment()
// console.log(chai.score)

// let's suppose if want a prototype to be available for all arrays, function and string, objects, then we do this below

Object.prototype.vishav=function(){
    console.log("Punjabi aa gye oye!")
}
chai.vishav()
let me="vishav"
me.vishav()//working on string also

//Basically we made prototype in the object only and we know that functions, arrays and all other things refer to objects, now they can access the "vishav" prototype.

//************Protoype inheritance--to connect two objects, basically one function inherits from the other************/

const user1={
    name:"vishav"
}
const user2={
    email:"vishal@123"
}
const user3={
    place:"xyz",
    // __proto__:user2// Old syntax of connecting two objects using proto keyword or there is another method "user1.__proto__=user2"


}
// Modern Syntax:

Object.setPrototypeOf(user1, user2)// user1 inheriting properties of user2

