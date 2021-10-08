let menuBtn =document.querySelector('#menu-btn');
let searchbtn=document.querySelector('#search-btn');
let colorbtn=document.querySelector('#color-btn');
let themebtn=document.querySelector('#theme-btn');


let navber=document.querySelector('.navber');
let searchform = document.querySelector('.search-form');
let colorspalette = document.querySelector('.colors-palette');
 
menuBtn.onclick = () =>{
     navber.classList.toggle('active');
     searchform.classList.remove('active');
     colorspalette.classList.remove('active');
     
 } 
 searchbtn.onclick = () =>{
    navber.classList.remove('active');
    searchform.classList.toggle('active');
    colorspalette.classList.remove('active');
 }
 colorbtn.onclick = ()=>{
    colorspalette.classList.toggle('active');
    navber.classList.remove('active');
    searchform.classList.remove('active');
}
document.querySelectorAll('.colors-palette .color').forEach(btn =>{
             btn.onclick =()=>{
                 let color=btn.style.background;
                 document.querySelector(':root').style.setProperty('--main-color' , color) ; 
             }
})

themebtn.onclick = ()=> { 
    themebtn.classList.toggle('fa-sun');
    if( themebtn.classList.contains('fa-sun')){
        document.body.classList.add('active');

    }else{
        document.body.classList.remove('active');   
    }
}









