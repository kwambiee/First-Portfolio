let div = document.querySelector('.close-page');
let open= document.querySelector('.open');
let close= document.querySelector('.close');
let links = document.querySelector('li');

open.addEventListener('click',()=>{
 div.style.display="block";
})

close.addEventListener('click',()=>{
 div.style.display="none";
})

links.addEventListener('click',()=>{
    div.style.display="none";

   console.log("kerry")
})



