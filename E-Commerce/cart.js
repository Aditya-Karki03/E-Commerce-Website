const navArrow=document.querySelector('.bx-right-arrow-alt');
const navLinks=document.querySelector('.links');
const menu=document.querySelector('.bx-menu');
menu.addEventListener('click',()=>{
   navLinks.style.right='0px'
})
navArrow.addEventListener('click',()=>{
    navLinks.style.right='-400px'
})


document.addEventListener('DOMContentLoaded', function() {
    // Get the query parameter from the URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    // console.log(urlParams);
    const encodedDiv = urlParams.get('content');

    // Decode the encoded HTML content
    const decodedDiv = decodeURIComponent(encodedDiv);
    //console.log(decodedDiv)
    // Insert the decoded HTML content into a container
    const container = document.getElementById('cart-container');
    container.innerHTML = decodedDiv;
    
});
