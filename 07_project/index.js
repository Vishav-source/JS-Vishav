let random_Color=function(){
    let hex='0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color

}

const bg_color= function(){
        document.body.style.backgroundColor=random_Color()
    
    }
let IntervalId=null
const changing_color=function (){
    if(!IntervalId){
    stop=setInterval(bg_color,2000)
    }
   
}
const stop_changing_color=function(){
    clearInterval(stop)
    IntervalId=null

}

document.querySelector('#start').addEventListener('click',changing_color)
document.querySelector('#stop').addEventListener('click',stop_changing_color)