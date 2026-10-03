//IIFE: Immediate Invoked function Expressions, used basically to prevent function to get polluted from global variables

(function chai(){
    console.log("DB CONNECTED")
})();// semicolon is important, explicitly likhna ha nye to agge waala execute ni hoga

((username)=> {
    console.log(`${username}, how r u?`)
}
)("vishav");


