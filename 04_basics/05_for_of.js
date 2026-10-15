// For each is another type of loop to iterate  arrays.
const arr=[2,34,5,6,]
for (const item of arr) {
    // console.log(item)
    
}

const myString="Hello Vishav"
for (const item of myString) {
    // console.log(item)
    
}

const map=new Map();
map.set('IN',"India")
map.set('US',"USA")

for (const [item] of map) {
    console.log(`${item}: ${[item]}`)
    
}
// for of doesn't work on objects;