// operator(??): will choose the true value in case of selection between null or undefined
// const user=4??5
// console.log(user);
const user=null??5
console.log(user);

const user2=undefined??4
console.log(user2)

const user3= undefined??null
console.log(user3)// will evaluate to null


/*******************Ternary operator */
console.log((69 % 2 == 0) ? "yes" : "No");
