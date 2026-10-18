//***********************************PROMISE(then and catch),ASYNC(try & catch) AWAIT AND FETCH***************************/

// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Executed promise")
//         resolve()
        
//     }, 1000);
// })
// promiseOne.then(function(){
// console.log("promise succesfully executed!")
// })

// const promise2=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Promise 2 created!")
//     },1000)
//     resolve({username:"vishav",age:12})

// }).then(function(resolved){
//     console.log(resolved)

// })

// const promise3=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Promise 2 created!")
//     },1000)
//     resolve({username:"vishav",age:12})

// }).then(function(resolved){
//     return resolved.username

// }).then(function(user){
//     console.log(user)
// })


// const promise4=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error=false
//     if(!error){
//         resolve({username:"vishav",age:12})
//     }
//     else{
//         reject("ERROR: Something went Error!")
//     }
//     },1000) 
// }).then(function(resolved){
//     return resolved.username

// }).then(function(user){
//     console.log(user)
// }).catch(function(error){
// console.log(error)
// })
//******************************Async and await*****************************/

const promise5=new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=false
    if(!error){
        resolve({username:"vishav",age:12})
    }
    else{
        reject("ERROR: Something went Error!")
    }
    },1000) 
})

async function asyncfunction(){
    try{
        let responsed = await promise5
        console.log(responsed)

    }
    catch(error){
        console.log(error)
    }


}
asyncfunction()


//**********************************Fetch and async*****************/

async function myfunction(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json()//Why? cuz api response will be string, we r converting it to object(json)
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
myfunction()


//**************************Fetch keyword using try and catch********************/

// Fetch is used for network request and it returns us the promise which is inturn handled by then and catch

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()

})
.then(function(data){
    console.log(data)

})
.catch(function(error){
    console.log(error)
})