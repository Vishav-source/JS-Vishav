{
    const a=3
    let b=4
    var c=90
}


// console.log(a)
// console.log(b)
// console.log(c)// we would be able to access 'c', basically var doesn't know scope and it's useless yet for me


function one(){
    const username="vishav"
    function two(){
        const username2="arun"
        console.log(username)
    }
    two()
    // console.log(username2)
}
// one()

//*********************Interesting**********************
two(3)// function call before declaring the function will work
function two(num){
    console.log(num+1);
}

//var1(4)// will give error, cuz it's been called befor declaration
const var1=function (num){
    return num+1
}
var1(4)

