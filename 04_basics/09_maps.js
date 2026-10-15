const user=[3,5,46,6,7]

// const result=user.map((item)=>item+10)
// console.log(result)


//******chaining in map */
const result2=user
.map((item)=>item+20)
.map((item)=>item+1)
.filter((item)=>item>24)

console.log(result2)