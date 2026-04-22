// ===== ВСЕ ЭЛЕМЕНТЫ =====
const animateItems = document.querySelectorAll('.animate, .title-anim, .center-anim');
const zoomItems = document.querySelectorAll('.zoom-img');

// ===== ОСНОВНАЯ ФУНКЦИЯ СКРОЛЛА =====
function handleScroll() {
    const trigger = window.innerHeight * 0.85;

    // обычное появление
    animateItems.forEach(item => {
        const top = item.getBoundingClientRect().top;

        if (top < trigger) {
            item.classList.add('active');
        }
    });

    // zoom для фото
    zoomItems.forEach(item => {
        const top = item.getBoundingClientRect().top;

        if (top < trigger) {
            item.classList.add('active');
        }
    });
}

// ===== СОБЫТИЯ =====
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);