//Javascript is basically a prototype based language, it does have classes but it is give to familiarity to other developers coming from other languages such as C++, java & etc.



//*************************Object literal***************************
// wraps properties and methods like class

const obj1={
    username:"vishav",
    Logged_IN: 5,
    greetings: function user(){
        console.log(`Username:${this.username}`)
    }
}

console.log(obj1.greetings())


//*******************Constructor Function - new keyword***********************
const user=function(username, loggedIn){
    this.username=username,
    this.loggedIn=loggedIn
    return this
}

// const instance1=user("vishav",true)
// console.log(instance1)
// const instance2=user("baigra",12)
// console.log(instance1)// will overwrite the function values, because it's treating the function as single instance,
// to make multiple instance of same function use new keyword

const instance1= new user("vishav",true)
console.log(instance1)
const instance2=new user("baigra",12)
console.log(instance2)


