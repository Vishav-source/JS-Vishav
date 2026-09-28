// const myarr=[1,5,8,9]
// console.log(myarr)

const myrr=new Array(1,5,6,8)
// console.log(myrr)

// myrr.push(9)// and you know about pop()
// console.log(myrr)

// Unshift-- here we add an elt. in the upfront----but should not be used, because every elt. position we have to shift,what if 1000 elts.
// myrr.unshift(90)
// console.log(myrr)
// myrr.shift()
// console.log(myrr)


// console.log(myrr.includes(5))
// console.log(myrr.indexOf(8))


//************JOIN******************** */
// const myrr2=myrr.join()
// console.log(myrr);
// console.log(myrr2)
// console.log(typeof myrr2)

//*************SLICE & SPLICE*****************/
console.log(myrr.slice(1,3))//
console.log(myrr)

console.log(myrr.splice(1,3))// Basically can manipulate the original array, pop out the elts also includes last index.
console.log(myrr)
