"use strict";
const btn = document.querySelector("#btn");
btn.addEventListener('click',()=>{
    alert("Hajime");
});
btn.addEventListener('click',()=>{
    alert('hajime 2');
});
btn.addEventListener('mouseenter',()=>{
    alert('its hover');
}); // hover boganda ishga tushadi