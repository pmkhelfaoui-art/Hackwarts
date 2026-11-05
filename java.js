const housesimgs = [
    "images/Griffendor.png","images/Ravenclaw.png","images/Huffelpuff.png","images/Slytherin.png"
];
let currhouse = 0;
const slider=document.getElementById("turninghouses");
setInterval(()=>{
slider.style.opacity=0;
setTimeout(()=>{
currhouse=(currhouse+1) %housesimgs.length;
slider.src=housesimgs[currhouse];
slider.style.opacity=1;
    },300);
}, 1000);