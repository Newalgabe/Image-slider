let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    slideIndex = (index + totalSlides) % totalSlides;

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === slideIndex) {
            slide.classList.add('active');
        }
    });

    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function changeSlide(direction) {
    showSlide(slideIndex + direction);
}

showSlide(slideIndex);

setInterval(() => {
    changeSlide(1);
}, 5000);
