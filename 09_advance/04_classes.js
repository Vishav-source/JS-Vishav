// class user{
//     constructor(username, email, password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     logMe(){
//      console.log(`The name of the user is:${this.username}`);
        
//     }
// }
// const vishav=new user("vishav", "visha@gmail.com", 12345);
// vishav.logMe();

// Doing using Object functionality

function User(username, email,password){
    this.username=username
    this.email=email
    this.password=password
}

User.prototype.logMe=function(){
    console.log(`The name of the user is:${this.username}`);
}
const vishav=new User("Vishav","vishav@123gmail.com", "1235");
vishav.logMe();


