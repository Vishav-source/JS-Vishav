const user=[1,3,3,5]
user.forEach(function(item){
    // console.log(item)
})


// arrow function in forEach
user.forEach((item)=>{
    // console.log(item)
})

// Passing function as argument in forEach loop
function print(item){
    // console.log(item)
}
user.forEach((print))

user.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})

//**********************Most important part*********************** 
const user1=[
    {
        languagename:"java",
        languagefilename:"js",
    },
    {
        languagename:"python",
        languagefilename:"py",
    },
    {
        languagename:"c++",
        languagefilename:"cpp",
    }
]

user1.forEach((item)=>{
    console.log(item.languagefilename)
})


