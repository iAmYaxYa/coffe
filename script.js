let slider = document.querySelector(".slider")
let list = document.querySelectorAll(".list")

list.forEach((lis,index)=>{
    lis.addEventListener("click",()=>{
        slider.style.transform = `translateX(-${100 * index}vw)`;
    })
})