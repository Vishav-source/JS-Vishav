class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        return `${this.username}@123`
    }

// static keyword 
static log2(){
    return `${this.username} not accessile`
}
}

class user2 extends user{
    constructor(username, email, password){
        super(username)
        this.email=email
        this.password=password
    }
    name(){
        return `The name is ${this.username}`
    }
}
const vishav=new user2("vishav","visah@gmail.com","1245")
console.log(vishav.name())
console.log(vishav.logMe())
// console.log(vishav.log2())
const baigra= new user("vishav")
console.log(baigra.log2())