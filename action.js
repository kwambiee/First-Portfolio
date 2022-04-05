window.onload = function () {
let bars=document.querySelector('.bars')
let div = document.querySelector('.close-page');
let open= document.querySelector('.open');
let close= document.querySelector('.close');
let links = document.querySelectorAll('.menu-link');

open.addEventListener('click',()=>{
 div.style.display="block";

})

function redirect(){
    let location = window.location;
    let initial = location.pathname;
    console.log(location)

}

 links.forEach((link)=> {
    link.addEventListener('click',function(e){
        // e.preventDefault();
div.style.display="none";
reload();
    })
 })

close.addEventListener('click',()=>{
 div.style.display="none";
})

document.querySelectorAll(".menu-link").forEach(n => n.addEventListener("click",()=> {
    menu-list.classList.remove("menu-link");
    // bars.classList.remove("close-page")
}))
}
