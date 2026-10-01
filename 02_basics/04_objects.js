const Jsuser=new Object();// Singelton Object declaratioon
const Juser={}
Juser.name="Vishav"
// console.log(Juser)
const Juser2={1:"a",2:"b"}

const Juser3={...Juser,...Juser2}
// console.log(Juser3);


//*******************Objects Nesting ****************/
const Juser4={
    name:"vishav",
    fullname:{
        
            userfullname:{
                firstname:"vishav",
                lastname:"baigra"
            }
        

    }
}
// console.log(Juser4)
// console.log(Juser4.fullname.userfullname.firstname)


//***************Array of Objects*******************/

// const obj1=[
//     {
// id:123,
// name:"vishav"
    
// },
//     {
// id:123,
// name:"vishav"
    
// },
//     {
// id:123,
// name:"vishav"
    
// }
// ]
// console.log(obj1);
const obj1={name:"vishav",id:123}

// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))
// console.log(obj1.hasOwnProperty('name'))// to check whethere array has this or not
console.log(obj1.hasOwnProperty('id'))

//************************Object de-structur****************/

const course={
    coursename:"Js in Hindi",
    courseInstructor:"hitesh sir"
}

// console.log(course.courseInstructor)

const {courseInstructor}=course
console.log(courseInstructor)

const {courseInstructor:Instructor}=course
console.log(Instructor)


//***********************JSON FORMAT**********************/

// {
//     "name":""
//     "id":123
// }