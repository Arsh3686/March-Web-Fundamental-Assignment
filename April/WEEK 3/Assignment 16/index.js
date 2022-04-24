const hov = document.getElementById("hover");
const hov2 = document.getElementById("hover2");
const body = document.querySelector("body")
hov.innerHTML=`<img src="./images/vk.webp" alt="demo">`
hov.addEventListener("mouseover",(e)=>{
    hov.style.transform="scale(1.1)";
    body.style.backgroundColor="royalblue"
})
hov.addEventListener("mouseleave",()=>{
    hov.style.transform="scale(1)"
    body.style.backgroundColor="#fff"
})