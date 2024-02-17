const navArrow=document.querySelector('.bx-right-arrow-alt');
const navLinks=document.querySelector('.links');
const menu=document.querySelector('.bx-menu');
menu.addEventListener('click',()=>{
   navLinks.style.right='0px'
})
navArrow.addEventListener('click',()=>{
    navLinks.style.right='-400px'
})


//Listing all the clothes displayed on the webpage
const clothes=document.querySelectorAll('.image-holder');


//Whenever clicked on each individual clothes it should move to different screen
clothes.forEach((cloth)=>{
    cloth.addEventListener('click',(e)=>{
        const img=cloth.firstElementChild.innerHTML;
        const url = `sProduct.html?img=${encodeURIComponent(img)}`;
        window.location.href=url;
    })
})

//Adding cart functionnality
const carts = document.querySelectorAll('.bxs-cart-add');
    carts.forEach((cart) => {
    cart.addEventListener('click', (e)=>{
        AddedToCart(e,cart);
        SendClothDivToCart(e,cart);
    });
});

function SendClothDivToCart(e,cart){
    // const anchor=e.target.parentElement;
    // const priceAndCart=anchor.parentElement;
    // const divHoldingAll=priceAndCart.parentElement;
    // const cartIcon=document.querySelector('.bxs-cart');
    // const parentOfCartIcon=cartIcon.parentElement;
    // const encodedHTML=encodeURIComponent(parentOfCartIcon.outerHTML);
    // console.log(encodedHTML);
    // const urlForCart=`cart.html?content=${encodedHTML}`;
    // cartIcon.setAttribute('href',urlForCart);
    const cartIcon = document.querySelector('.bxs-cart');
    const parentOfCartIcon = cartIcon.parentElement;
    const encodedHTML = encodeURIComponent(parentOfCartIcon.outerHTML);
    console.log(encodedHTML);
    const urlForCart = `cart.html?content=${encodedHTML}`;

// Add a click event listener to navigate to the cart page
    cartIcon.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the anchor tag
    window.location.href = urlForCart; // Navigate to the cart page
});

}

function AddedToCart(e,cart){
    const carts = document.querySelectorAll('.bxs-cart-add');
    carts.forEach((cart) => {
    cart.addEventListener('click', (e)=>{
        AddedToCart(e,cart)
    });
});
    e.stopPropagation();
    e.preventDefault();
    cart.classList.toggle('rotated-text');
    setTimeout(()=>{
        // cart.classList.replace('bxs-cart-add','bx-check')
        cart.parentElement.innerHTML="<i class='bx bx-check'></i>";
        checkedOrNot();
    },900)

}
//Once the cloth is added to cart, cart icon changes to tick
//If clicked on check, I want to change it to cart
function checkedOrNot(){
    const checked=document.querySelectorAll('.bx-check');
checked.forEach((checks)=>{
    checks.addEventListener('click',(e)=>{
        e.stopPropagation();
        e.preventDefault();
        checks.classList.toggle('anti-rotated-text')
        setTimeout(()=>{
            checks.parentElement.innerHTML='<i class="bx bxs-cart-add"></i>';
           AddedToCart();
            
        },900)
    })
})
}




//Lets build star rater
const divContainingStars=document.querySelectorAll('.stars');
divContainingStars.forEach((div)=>{
    div.addEventListener('click',(e)=>{
        e.stopPropagation();
        e.preventDefault();
//Since we've added event listner to a div so we also can click on gaps between the stars
//Hence to be more precise we are using the if statement
//This if statement is used to generate index of the selected star.
//By converting nodelist/HTMLCollection to array
        if(e.target.classList[0]=='bx'){
            const parentEle=e.target.parentElement;
            const arrayOfStars=Array.from(parentEle.children);
            const index=arrayOfStars.indexOf(e.target);
            starMaker(index,arrayOfStars);
        }
    })
    
})

//It colors the stars depending on which star is being clicked
function starMaker(index,arrayOfStars){
    const computedStyle = window.getComputedStyle(arrayOfStars[index]);
    const color = computedStyle.color;
    if(index<4){
        for(let i=index+1;i<=4;i++){
            arrayOfStars[i].style.color='black';
        }
        for(let i=0;i<=index;i++){
            arrayOfStars[i].style.color='rgb(253,184,19)';
        }
    }
    if(index==4){
        for(let i=0;i<=index;i++){
            arrayOfStars[i].style.color='rgb(253,184,19)';
        }
    }
}