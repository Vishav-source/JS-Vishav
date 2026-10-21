function setUsername(username){
    this.username=username
}
function createUser(username, email, password){
    setUsername.call(this,username)//call passes the execution context and this passes the reference otherwise in other function the context will be lost, once the other function exectues
    this.email=email
    this.password=password
}

const chai=new createUser("vishav","vis123@gmail.com","1234")
console.log(chai);
