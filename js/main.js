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
    elAddToNumber.textContent ++;
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

// GALLERY
const elHeroGalleryImgBtn = document.querySelectorAll('.hero-gallery-img-btn');
let elHeroImg = document.querySelector('.js-hero-img');
const elHeroGalleryImg = document.querySelectorAll('.js-hero-gallery-img');

elHeroGalleryImgBtn.forEach(function (item, index) {
    item.addEventListener('click', function () {
        elHeroImg.src = elHeroGalleryImg[index].src;

        elHeroGalleryImg.forEach(function (item, index) {
            item.classList.remove('active');
        })
        elHeroGalleryImg[index].classList.add('active');
    });
});


// MODAL
const elModal = document.querySelector('.js-modal');
const elModalCloseBtn = document.querySelector('.js-modal-close-btn');
const elHeroImgBtn = document.querySelector('.js-hero-img-btn');
const elNextBtn = document.querySelector('.js-next-btn');
const elPrevBtn = document.querySelector('.js-prev-btn');
const elGalleryImgBtn = document.querySelectorAll('.js-gallery-img-btn');
let elModalImg = document.querySelector('.js-modal-img');
const elGalleryImg = document.querySelectorAll('.js-gallery-img');

elHeroImgBtn.addEventListener('click', function () {
    elModal.classList.add('modal--show');
});

elModalCloseBtn.addEventListener('click', function () {
    elModal.classList.remove('modal--show');
});

elGalleryImgBtn.forEach(function(item, index) {
    item.addEventListener('click', function () {
        elModalImg.src = elGalleryImg[index].src;
        elGalleryImg.forEach(function (item, index) {
            item.classList.remove('active');
        });
        elGalleryImg[index].classList.add('active');
    });
});



if (elNextBtn) {
    elNextBtn.addEventListener('click', function () {
        elGalleryImg.forEach(function (item, index) {
            if (elGalleryImg[index].classList == 'gallery__img js-gallery-img active') {
                item.classList.remove('active');
                elGalleryImg[index+1].classList.add('active');
                elModalImg.src = elGalleryImg[index+1].src;
            }
        });
    });
}


if (elPrevBtn) {
    elPrevBtn.addEventListener('click', function () {
        elGalleryImg.forEach(function (item, index) {
            if (elGalleryImg[index].classList == 'gallery__img js-gallery-img active') {
                item.classList.remove('active');
                elGalleryImg[index-1].classList.add('active');
                elModalImg.src = elGalleryImg[index-1].src;
            }
        });
    });
}