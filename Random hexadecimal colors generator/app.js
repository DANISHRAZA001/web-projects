const hexArray=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const contentContainer=document.querySelector(".container");
const button=document.querySelector(".Generate");
const color=document.querySelector("h3");

// Hex color will be in the form #3b6f4d

button.addEventListener("click",function(){
    let hexColor='#';
    for(let i=0;i<6;i++){
    const randomIdx=Math.floor(Math.random()*hexArray.length);
    hexColor+=hexArray[randomIdx];
}
color.textContent=hexColor;
contentContainer.style.backgroundColor=hexColor;


});

        
    








