const sliders = document.querySelector('.slider_items').children;
const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');
var index = 0;

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sliders[index].classList.remove('active');
    index++;


    if (index >= sliders.length) {
        index = 0;
    }
    sliders[index].classList.add('active');
});
prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sliders[index].classList.remove('active');
    index--
    if (index < 0) {
        index = sliders.length - 1;
    }
    sliders[index].classList.add('active');
})