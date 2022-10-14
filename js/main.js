let images=document.querySelectorAll(".buttons-image");
let Starbucks=document.querySelector(".Starbucks")
let btn1=document.querySelector(".btn1")
let land=document.querySelector(".land-image img")
let nav=document.querySelectorAll(".navbar-nav li")


images[0].onclick=function(){
    Starbucks.className="green"
    btn1.style.backgroundColor="var(--green-color)"
    land.src="./images/img1.png"
    nav.forEach((e)=>{
        e.style.backgroundColor="var(--green-color)"
    })
    
}
images[1].onclick=function(){
    Starbucks.className="pink-light"
    btn1.style.backgroundColor="var(--pink-light)"
    land.src="./images/img2.png"
    nav.forEach((e)=>{
        e.style.backgroundColor="var(--pink-light)"
    })
    
}
images[2].onclick=function(){
    Starbucks.className="pink"
    btn1.style.backgroundColor="var(--pink-color)"
    land.src="./images/img3.png"
    nav.forEach((e)=>{
        e.style.backgroundColor="var(--pink-color)"
    })
   
}