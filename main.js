let serch = document.querySelector('.serch-box');
let nav = document.querySelector('.nav');
let men =document.getElementById('menu');
men.onclick =() => {
    nav.classList.toggle('active');
    serch.classList.remove('activ');
}
 document.getElementById('searh').onclick =() =>{
    serch.classList.toggle('activ');
    nav.classList.remove('active');
 }

//  navbar scroll 
let header =document.querySelector('.header');
console.log(header)
window.addEventListener('scroll' ,() =>{
    header.classList.toggle('shadow', scrollY > 0);
});
// scroll animation 
let sr = ScrollReveal ({
    distance: '60px',
    duration:2500,
    delay:400,
    reset:true
});
sr.reveal('.header',{ delay:200 , origin : 'top'});
sr.reveal('.home-sec',{ delay:200 , origin : 'top'});
sr.reveal('.about-img',{ delay:200 , origin : 'top'});
sr.reveal('.about-text ',{ delay:200 , origin : 'left'});
sr.reveal('.head',{ delay:200 , origin : 'left'});
sr.reveal('.box',{ delay:200 , origin : 'top'});
sr.reveal('.left',{ delay:200 , origin : 'top'});
sr.reveal('.h1',{ delay:200 , origin : 'left'});
sr.reveal('.custom-row',{ delay:200 , origin : 'top'});
sr.reveal('.foter',{ delay:200 , origin : 'top'});


