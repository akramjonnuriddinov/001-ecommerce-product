const elSiteHeaderCartLink = document.querySelector('.js-site-header-cart-link');
const elCart = document.querySelector('.js-cart');
const elBtnDecr = document.querySelector('.js-btn-decr');
const elBtnIncr = document.querySelector('.js-btn-incr');
const elAddToNumber = document.querySelector('.add-to-number__number');
const elAddToCartBtn = document.querySelector('.js-add-to-cart-btn');
const elCartContent = document.querySelector('.js-cart-content');

elSiteHeaderCartLink.addEventListener('click', function () {
    elCart.classList.toggle('cart--show');
});

elBtnIncr.addEventListener('click', function () {
    if (elAddToNumber.textContent === '0') {
        elAddToNumber.textContent = '';
        elAddToNumber.textContent ++;
    } else {
        elAddToNumber.textContent ++;
    }
});

elBtnDecr.addEventListener('click', function () {
    if (elAddToNumber.textContent !== '0') {
        elAddToNumber.textContent --;
    }
});

elAddToCartBtn.addEventListener('click', function () {
    elCartContent.textContent = '';
    elCartContent.textContent = elAddToNumber.textContent;
    
});