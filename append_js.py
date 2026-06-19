with open('main.js', 'r', encoding='utf-8') as f:
    js = f.read()

carousel_logic = '''
// ── Unified Carousel Logic ─────────────────
function initCarousels() {
  const carousels = document.querySelectorAll('.unified-carousel');
  carousels.forEach(carousel => {
    // Prevent double initialization
    if (carousel.dataset.initialized) return;
    carousel.dataset.initialized = "true";

    const slides = carousel.querySelectorAll('.carousel-slide');
    if (slides.length <= 1) return;

    let currentIndex = 0;
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const dotsContainer = carousel.querySelector('.carousel-indicators');
    let dots = [];

    // Create dots if container exists
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
        dots.push(dot);
      });
    }

    function goToSlide(index) {
      slides[currentIndex].classList.remove('active');
      if (dots.length > 0) dots[currentIndex].classList.remove('active');
      
      currentIndex = index;
      
      slides[currentIndex].classList.add('active');
      if (dots.length > 0) dots[currentIndex].classList.add('active');
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        let nextIdx = currentIndex - 1;
        if (nextIdx < 0) nextIdx = slides.length - 1;
        goToSlide(nextIdx);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        let nextIdx = (currentIndex + 1) % slides.length;
        goToSlide(nextIdx);
      });
    }
  });
}
'''

# Find the DOMContentLoaded event or handleRoute
js = carousel_logic + js

# We also want to call initCarousels() when the DOM is loaded
js = js.replace("document.addEventListener('DOMContentLoaded', () => {", "document.addEventListener('DOMContentLoaded', () => {\\n  initCarousels();")

with open('main.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Appended JS logic")
