let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn') .onclick = () =>{
    console.log('#Menu button clicked');
    navbar.classList.toggle('active');
    SearchForm.classList.remove('active');
    cartItem.classList.remove('active');
};

let SearchForm = document.querySelector('.search-form');

document.querySelector('#search-btn') .onclick = () =>{
    console.log('#Search button clicked');
    SearchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    
};

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn') .onclick = () =>{
    console.log('#Cart button clicked');
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    SearchForm.classList.remove('active');
};

window.onscroll = () =>{
    console.log('Window scrolled');
    navbar.classList.remove('active');
    SearchForm.classList.remove('active');
    cartItem.classList.remove('active');

};
console.log('JavaScript file loaded');