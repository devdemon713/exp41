// Carousel functionality
const carousel = document.querySelector('.carousel-container');
const images = carousel.querySelectorAll('img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;
let carouselInterval = null;

// Create dots
images.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('.dot');

function updateSlide() {
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

function goToSlide(index) {
    currentIndex = index;
    updateSlide();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide();
}

// Auto-advance slides
function startAutoSlide() {
    if (carouselInterval) clearInterval(carouselInterval);
    carouselInterval = setInterval(nextSlide, 3000);
}

// Event listeners
prevBtn.addEventListener('click', () => {
    prevSlide();
    startAutoSlide();
});

nextBtn.addEventListener('click', () => {
    nextSlide();
    startAutoSlide();
});

// Start auto-sliding
startAutoSlide();