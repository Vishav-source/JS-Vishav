const user=[3,6,2,5,6,7,8]
// const result=user.filter((item)=>item>3)
// console.log(result);
// if we would have done it with for each:

// const result=user.forEach((item)=>item>2)
// console.log(result)// won't return anything cuz forEach doesn't return anything..

// now just like common array practices we use another empty array and we will push values into it;

// const result2=[]
// user.forEach((item)=>{
//     if(item>2){
//         result2.push(item)
//     }
// })
// console.log(result2)

const result=user.filter((item)=>item+10)//return a boolean condition, not a modified value.
console.log(result)// won't return the updated  values

//that's why we came accross map

