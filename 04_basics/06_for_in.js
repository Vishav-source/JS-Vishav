const user={
    name:"vishav",
    lastname:"baigra"
}
// for (const key in user) {
//     console.log(user)
    
// }
for (const key in user) {
    // console.log(`${key} : ${user[key]}`)
    
}

// for in on arrays
const arr=[1,23,4,45,6]

for (const key in arr) {
    // console.log(arr[key]);  
    
}

// for in loop doesn't work on the maps
const map=new Map()
map.set('IN', "india")
for (const key in map){
    console.log(key);
    
}