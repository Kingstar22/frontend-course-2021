const page = document.querySelector('html');
const toggleButton = document.querySelector('[data-toggle]');
const halfmoon = document.querySelector('[data-halfmoon]');
const sun = document.querySelector('[data-sun]');
const imagesIn = document.querySelectorAll('[data-image-in]');
const buttonUp = document.querySelector('[data-back-to-top]');
toggleButton.addEventListener('click', () => {
    page.classList.toggle('html--dark');
    halfmoon.classList.toggle('themes-toggle__button--hidden');
    sun.classList.toggle('themes-toggle__button--active');
});
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
};
function imageIntersect([entry]) {
    if (entry.isIntersecting) {
        entry.target.classList.add('image-animation');
        setTimeout(() => {
            entry.target.classList.remove('image');
        }, 3000);
    }
}
const observer = new IntersectionObserver(imageIntersect, options);
for (let count = 0; count < imagesIn.length; count++) {
    observer.observe(imagesIn[count]);
}
window.addEventListener('scroll', () => {
    if (window.scrollY < document.documentElement.clientHeight) {
        buttonUp.classList.add('button__back-to-top--hidden');
    } else {
        buttonUp.classList.remove('button__back-to-top--hidden');
    }
});
buttonUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
