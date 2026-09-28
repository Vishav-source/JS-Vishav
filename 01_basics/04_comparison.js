// console.log(2>1)// these are all familiar comparison operators

// // the real comparison/conversion picture comes here:

// console.log("2">1)// it will give true answer cuz it's converting string into int and then comparing
// console.log("02">1)// will give true only.

//*******Some interesting conversions*************
// console.log(null>0)//false treating null as NAN
// console.log(null==0)//treating null as nan
// console.log(null>=0)//treating null as 0, that's why we can't really predict what it will convert into

// console.log(undefined>0)// will give false always with any datatype


//***************************Strict checking(===)**********/ 
//compares data types also

console.log("2"===2)// will give false