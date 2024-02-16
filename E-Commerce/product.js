const navArrow=document.querySelector('.bx-right-arrow-alt');
const navLinks=document.querySelector('.links');
const menu=document.querySelector('.bx-menu');
menu.addEventListener('click',()=>{
   navLinks.style.right='0px'
})
navArrow.addEventListener('click',()=>{
    navLinks.style.right='-400px'
})


const mainCloth=document.querySelector('.main-clothes');

const urlParams = new URLSearchParams(window.location.search);
const imgSrc = urlParams.get('img');


mainCloth.innerHTML = `${imgSrc}`;

//colors for choosing the colors of the shirts
const clothOpts=document.querySelectorAll('.multiCloth');
clothOpts.forEach((clothOpt)=>{
    clothOpt.addEventListener('click',()=>{
        const source=clothOpt.getAttribute('src');
        const newImage=document.createElement('img');
        mainCloth.innerHTML=`<img src="${source}" alt="shirt">`;
    })
})
