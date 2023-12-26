const slider = document.querySelectorAll('.slider');
const btnEsq = document.getElementById('esquerda');
const btnDir = document.getElementById('direita');

let currentSlide = 0;

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
}
function showSlider(){
    slider[currentSlide].classList.add('on')
}

function proxSlide() {
    hideSlider()
    if (currentSlide == slider.length -1) {
        currentSlide = 0       
    } else {
        currentSlide++
    }
    showSlider()
}

function anteSlide() {
    hideSlider()
    if (currentSlide == 0) {
        currentSlide = slider.length -1      
    } else {
        currentSlide--
    }
    showSlider()
}



btnDir.addEventListener('click', proxSlide)
btnEsq.addEventListener('click', anteSlide)

