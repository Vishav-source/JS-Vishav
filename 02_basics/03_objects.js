// Objects singletons: object.create// will do later

const mysymbol = Symbol("mykey3");
//Object Literals
const Juser={
    name:"vishav",
    [mysymbol]:"mykey",// Symbol declaration
    "firstUser":"Baigra",// can have members like this and they have different way to access them other than (.) operator
    isLoggedDays:["MOnday","Tuesday"]
}

// console.log(Juser)// for full printing
// console.log(Juser.name);
// console.log(Juser["name"])
// console.log(Juser["firstUser"])

// Juser.name="hemant"
// console.log(Juser.name)
// Object.freeze(Juser)
// Juser.name="vishav"
// console.log(Juser.name)

Juser.greetings=function(){
    console.log(`Hello ${this.name}, how r u?`)// this is used for calling to same object variables
}
Juser.lastname="baigra"
console.log(Juser.greetings())
console.log(Juser.lastname)// we can add properties/variables outside the object this way, without adding them prior in the object