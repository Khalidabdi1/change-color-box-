
//colors
let colorOne =document.querySelector(".colorOne")
let colorTwo =document.querySelector(".colorTwo")
let colorThree =document.querySelector(".colorThree")
let colorFour =document.querySelector(".colorFour")




//change color 

let change=document.querySelector(".change")

//check
if(window.localStorage.getItem("color")){
    change.style.cssText=`background-color:${localStorage.getItem("color")};`
}

//check active color
if(window.localStorage.getItem("color")==="red"){
    colorOne.style.cssText="opacity:1;"

}else if(window.localStorage.getItem("color")==="green"){
    colorTwo.style.cssText="opacity:1;"

}else if(window.localStorage.getItem("color")==="blue"){
    colorThree.style.cssText="opacity:1;"

}else if(window.localStorage.getItem("color")==="black"){
    colorFour.style.cssText="opacity:1;"

}

//on click on colors

colorOne.addEventListener("click",()=>{
    colorOne.style.cssText="opacity:1;"
    colorTwo.style.cssText="opacity:0.5;"
    colorThree.style.cssText="opacity:0.5;"
    colorFour.style.cssText="opacity:0.5;"

    //change
    window.localStorage.setItem("color","red")




})

colorTwo.addEventListener("click",()=>{
    colorTwo.style.cssText="opacity:1;"
    colorOne.style.cssText="opacity:0.5;"
    colorThree.style.cssText="opacity:0.5;"
    colorFour.style.cssText="opacity:0.5;"

    //change local
    window.localStorage.setItem("color","green")


})

colorThree.addEventListener("click",()=>{
    colorThree.style.cssText="opacity:1;"
    colorFour.style.cssText="opacity:0.5;"
    colorTwo.style.cssText="opacity:0.5;"
    colorOne.style.cssText="opacity:0.5;"

        //change local
        window.localStorage.setItem("color","blue")



})


colorFour.addEventListener("click",()=>{
    colorFour.style.cssText="opacity:1;"
    colorTwo.style.cssText="opacity:0.5;"
    colorOne.style.cssText="opacity:0.5;"
    colorThree.style.cssText="opacity:0.5;"


        //change local
        window.localStorage.setItem("color","black")

})


setInterval(()=>{
    change.style.cssText=`background-color:${window.localStorage.color};`

},1000)










