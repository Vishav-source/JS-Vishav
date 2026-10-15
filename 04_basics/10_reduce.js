const user=[
    {
        coursename:"js",
        price:445
    },
     {
        coursename:"py",
        price:4444
    },
     {
        coursename:"ds",
        price:44848
    }
]

const result=user.reduce((acc,item)=>(acc+item.price),0)
console.log(result)